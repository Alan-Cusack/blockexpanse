import { type BlockStdScope, LifeCycleWatcher } from '@blockexpanse/block-std';
import { BlockExpanseError, ErrorCode } from '@blockexpanse/global/exceptions';
import {
  type DeepPartial,
  DisposableGroup,
  Slot,
} from '@blockexpanse/global/utils';
import { DocCollection } from '@blockexpanse/store';
import { computed, type Signal, signal } from '@preact/signals-core';
import clonedeep from 'lodash.clonedeep';
import mergeWith from 'lodash.mergewith';
import { z } from 'zod';

import {
  ColorSchema,
  makeDeepOptional,
  NodePropsSchema,
} from '../utils/index.js';
import { EditorSettingProvider } from './editor-setting-service.js';

const LastPropsSchema = NodePropsSchema;
const OptionalPropsSchema = makeDeepOptional(NodePropsSchema);
export type LastProps = z.infer<typeof NodePropsSchema>;
export type LastPropsKey = keyof LastProps;

const SessionPropsSchema = z.object({
  viewport: z.union([
    z.object({
      centerX: z.number(),
      centerY: z.number(),
      zoom: z.number(),
    }),
    z.object({
      xywh: z.string(),
      padding: z
        .tuple([z.number(), z.number(), z.number(), z.number()])
        .optional(),
    }),
  ]),
  templateCache: z.string(),
  remoteColor: z.string(),
  showBidirectional: z.boolean(),
});

const LocalPropsSchema = z.object({
  presentBlackBackground: z.boolean(),
  presentFillScreen: z.boolean(),
  presentHideToolbar: z.boolean(),

  autoHideEmbedHTMLFullScreenToolbar: z.boolean(),
});

type SessionProps = z.infer<typeof SessionPropsSchema>;
type LocalProps = z.infer<typeof LocalPropsSchema>;
type StorageProps = SessionProps & LocalProps;
type StoragePropsKey = keyof StorageProps;

function isLocalProp(key: string): key is keyof LocalProps {
  return key in LocalPropsSchema.shape;
}

function isSessionProp(key: string): key is keyof SessionProps {
  return key in SessionPropsSchema.shape;
}

function customizer(_target: unknown, source: unknown) {
  if (
    ColorSchema.safeParse(source).success ||
    source instanceof DocCollection.Y.Text ||
    source instanceof DocCollection.Y.Array ||
    source instanceof DocCollection.Y.Map
  ) {
    return source;
  }
  return;
}

export class EditPropsStore extends LifeCycleWatcher {
  static override key = 'EditPropsStore';

  private _disposables = new DisposableGroup();

  private innerProps$: Signal<DeepPartial<LastProps>> = signal({});

  lastProps$: Signal<LastProps>;

  slots = {
    storageUpdated: new Slot<{
      key: StoragePropsKey;
      value: StorageProps[StoragePropsKey];
    }>(),
  };

  constructor(std: BlockStdScope) {
    super(std);
    const initProps: LastProps = LastPropsSchema.parse(
      Object.entries(LastPropsSchema.shape).reduce((value, [key, schema]) => {
        return {
          ...value,
          [key]: schema.parse(undefined),
        };
      }, {})
    );

    this.lastProps$ = computed(() => {
      const editorSetting$ = this.std.getOptional(EditorSettingProvider);
      const nextProps = mergeWith(
        clonedeep(initProps),
        editorSetting$?.value,
        this.innerProps$.value,
        customizer
      );
      return LastPropsSchema.parse(nextProps);
    });
  }

  private _getStorage<T extends StoragePropsKey>(key: T) {
    return isSessionProp(key) ? sessionStorage : localStorage;
  }

  private _getStorageKey<T extends StoragePropsKey>(key: T) {
    const id = this.std.doc.id;
    switch (key) {
      case 'viewport':
        return 'blockexpanse:' + id + ':edgelessViewport';
      case 'presentBlackBackground':
        return 'blockexpanse:presentation:blackBackground';
      case 'presentFillScreen':
        return 'blockexpanse:presentation:fillScreen';
      case 'presentHideToolbar':
        return 'blockexpanse:presentation:hideToolbar';
      case 'templateCache':
        return 'blockexpanse:' + id + ':templateTool';
      case 'remoteColor':
        return 'blockexpanse:remote-color';
      case 'showBidirectional':
        return 'blockexpanse:' + id + ':showBidirectional';
      case 'autoHideEmbedHTMLFullScreenToolbar':
        return 'blockexpanse:embedHTML:autoHideFullScreenToolbar';
      default:
        return key;
    }
  }

  applyLastProps(key: LastPropsKey, props: Record<string, unknown>) {
    if (['__proto__', 'constructor', 'prototype'].includes(key)) {
      throw new BlockExpanseError(
        ErrorCode.DefaultRuntimeError,
        `Invalid key: ${key}`
      );
    }
    const lastProps = this.lastProps$.value[key];
    return mergeWith(clonedeep(lastProps), props, customizer);
  }

  dispose() {
    this._disposables.dispose();
  }

  getStorage<T extends StoragePropsKey>(key: T) {
    try {
      const storage = this._getStorage(key);
      const value = storage.getItem(this._getStorageKey(key));
      if (!value) return null;
      if (isLocalProp(key)) {
        return LocalPropsSchema.shape[key].parse(
          JSON.parse(value)
        ) as StorageProps[T];
      } else if (isSessionProp(key)) {
        return SessionPropsSchema.shape[key].parse(
          JSON.parse(value)
        ) as StorageProps[T];
      } else {
        return null;
      }
    } catch {
      return null;
    }
  }

  recordLastProps(key: LastPropsKey, props: Partial<LastProps[LastPropsKey]>) {
    const schema = OptionalPropsSchema._def.innerType.shape[key];
    if (!schema) return;

    const overrideProps = schema.parse(props);
    if (Object.keys(overrideProps).length === 0) return;

    const innerProps = this.innerProps$.value;
    const nextProps = mergeWith(
      clonedeep(innerProps),
      { [key]: overrideProps },
      customizer
    );
    this.innerProps$.value = OptionalPropsSchema.parse(nextProps);
  }

  setStorage<T extends StoragePropsKey>(key: T, value: StorageProps[T]) {
    const oldValue = this.getStorage(key);
    this._getStorage(key).setItem(
      this._getStorageKey(key),
      JSON.stringify(value)
    );
    if (oldValue === value) return;
    this.slots.storageUpdated.emit({ key, value });
  }

  override unmounted() {
    super.unmounted();
    this.dispose();
  }
}
