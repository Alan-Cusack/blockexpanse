import { ImageBlockSchema } from '@blockexpanse/affine-model';
import {
  BlockMarkdownAdapterExtension,
  type BlockMarkdownAdapterMatcher,
  ingestExternalImageUrl,
  type MarkdownAST,
} from '@blockexpanse/affine-shared/adapters';
import { getAssetName, nanoid } from '@blockexpanse/store';

const isImageNode = (node: MarkdownAST) => node.type === 'image';

export const imageBlockMarkdownAdapterMatcher: BlockMarkdownAdapterMatcher = {
  flavour: ImageBlockSchema.model.flavour,
  toMatch: o => isImageNode(o.node),
  fromMatch: o => o.node.flavour === ImageBlockSchema.model.flavour,
  toBlockSnapshot: {
    enter: async (o, context) => {
      const { walkerContext, assets } = context;
      const imageURL = 'url' in o.node ? o.node.url : '';
      if (!assets || !imageURL) {
        return;
      }
      const blobId = await ingestExternalImageUrl(imageURL, assets);
      if (!blobId) {
        return;
      }
      walkerContext
        .openNode(
          {
            type: 'block',
            id: nanoid(),
            flavour: 'affine:image',
            props: {
              sourceId: blobId,
            },
            children: [],
          },
          'children'
        )
        .closeNode();
    },
  },
  fromBlockSnapshot: {
    enter: async (o, context) => {
      const { assets, walkerContext, updateAssetIds } = context;
      const blobId = (o.node.props.sourceId ?? '') as string;
      if (!assets) {
        return;
      }
      await assets.readFromBlob(blobId);
      const blob = assets.getAssets().get(blobId);
      if (!blob) {
        return;
      }
      const blobName = getAssetName(assets.getAssets(), blobId);
      updateAssetIds?.(blobId);
      walkerContext
        .openNode(
          {
            type: 'paragraph',
            children: [],
          },
          'children'
        )
        .openNode(
          {
            type: 'image',
            url: `assets/${blobName}`,
            title: (o.node.props.caption as string | undefined) ?? null,
            alt: (blob as File).name ?? null,
          },
          'children'
        )
        .closeNode()
        .closeNode();
    },
  },
};

export const ImageBlockMarkdownAdapterExtension = BlockMarkdownAdapterExtension(
  imageBlockMarkdownAdapterMatcher
);
