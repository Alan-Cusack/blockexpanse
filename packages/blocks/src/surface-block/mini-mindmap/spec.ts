import type { BlockSchema } from '@blockexpanse/store';
import type { z } from 'zod';

import { SurfaceBlockSchema } from '@blockexpanse/affine-block-surface';
import { RootBlockSchema } from '@blockexpanse/affine-model';
import {
  DocModeService,
  ThemeService,
} from '@blockexpanse/affine-shared/services';
import {
  BlockViewExtension,
  type ExtensionType,
  FlavourExtension,
} from '@blockexpanse/block-std';
import { literal } from 'lit/static-html.js';

import { MindmapService } from './minmap-service.js';
import { MindmapSurfaceBlockService } from './surface-service.js';

export const MiniMindmapSpecs: ExtensionType[] = [
  DocModeService,
  ThemeService,
  FlavourExtension('affine:page'),
  MindmapService,
  BlockViewExtension('affine:page', literal`mini-mindmap-root-block`),
  FlavourExtension('affine:surface'),
  MindmapSurfaceBlockService,
  BlockViewExtension('affine:surface', literal`mini-mindmap-surface-block`),
];

export const MiniMindmapSchema: z.infer<typeof BlockSchema>[] = [
  RootBlockSchema,
  SurfaceBlockSchema,
];
