import { ImageBlockSchema } from '@blockexpanse/affine-model';
import {
  BlockNotionHtmlAdapterExtension,
  type BlockNotionHtmlAdapterMatcher,
  HastUtils,
  ingestExternalImageUrl,
} from '@blockexpanse/affine-shared/adapters';
import {
  type AssetsManager,
  type ASTWalkerContext,
  type BlockSnapshot,
  nanoid,
} from '@blockexpanse/store';

async function processImageNode(
  imageURL: string,
  walkerContext: ASTWalkerContext<BlockSnapshot>,
  assets: AssetsManager
) {
  const blobId = await ingestExternalImageUrl(imageURL, assets);
  if (!blobId) {
    return;
  }
  walkerContext
    .openNode(
      {
        type: 'block',
        id: nanoid(),
        flavour: ImageBlockSchema.model.flavour,
        props: {
          sourceId: blobId,
        },
        children: [],
      },
      'children'
    )
    .closeNode();
  walkerContext.skipAllChildren();
}

export const imageBlockNotionHtmlAdapterMatcher: BlockNotionHtmlAdapterMatcher =
  {
    flavour: ImageBlockSchema.model.flavour,
    toMatch: o => {
      return (
        HastUtils.isElement(o.node) &&
        (o.node.tagName === 'img' ||
          (o.node.tagName === 'figure' &&
            !!HastUtils.querySelector(o.node, '.image')))
      );
    },
    fromMatch: () => false,
    toBlockSnapshot: {
      enter: async (o, context) => {
        if (!HastUtils.isElement(o.node)) {
          return;
        }
        const { assets, walkerContext } = context;
        if (!assets) {
          return;
        }
        if (walkerContext.getGlobalContext('hast:disableimg')) {
          return;
        }

        switch (o.node.tagName) {
          case 'img': {
            const image = o.node;
            const imageURL =
              typeof image?.properties.src === 'string'
                ? image.properties.src
                : '';
            if (imageURL) {
              await processImageNode(imageURL, walkerContext, assets);
            }
            break;
          }
          case 'figure': {
            const imageFigureWrapper = HastUtils.querySelector(
              o.node,
              '.image'
            );
            let imageURL = '';
            if (imageFigureWrapper) {
              const image = HastUtils.querySelector(imageFigureWrapper, 'img');
              imageURL =
                typeof image?.properties.src === 'string'
                  ? image.properties.src
                  : '';
            }
            if (imageURL) {
              await processImageNode(imageURL, walkerContext, assets);
            }
            break;
          }
        }
      },
    },
    fromBlockSnapshot: {},
  };

export const ImageBlockNotionHtmlAdapterExtension =
  BlockNotionHtmlAdapterExtension(imageBlockNotionHtmlAdapterMatcher);
