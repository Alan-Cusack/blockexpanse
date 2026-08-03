import {
  type ParagraphBlockModel,
  ParagraphBlockSchema,
} from '@blockexpanse/affine-model';
import {
  I18nKeys,
  I18nProvider,
  identityI18nFn,
} from '@blockexpanse/affine-shared/services';
import { BlockService } from '@blockexpanse/block-std';

export class ParagraphBlockService extends BlockService {
  static override readonly flavour = ParagraphBlockSchema.model.flavour;

  placeholderGenerator: (model: ParagraphBlockModel) => string = model => {
    const t = this.std.getOptional(I18nProvider)?.t ?? identityI18nFn;

    if (model.type === 'text') {
      return t(
        I18nKeys.editor.placeholder.typeForCommands,
        "Type '/' for commands"
      );
    }

    const placeholders: Record<string, string> = {
      h1: t(I18nKeys.editor.placeholder.heading1, 'Heading 1'),
      h2: t(I18nKeys.editor.placeholder.heading2, 'Heading 2'),
      h3: t(I18nKeys.editor.placeholder.heading3, 'Heading 3'),
      h4: t(I18nKeys.editor.placeholder.heading4, 'Heading 4'),
      h5: t(I18nKeys.editor.placeholder.heading5, 'Heading 5'),
      h6: t(I18nKeys.editor.placeholder.heading6, 'Heading 6'),
      quote: '',
    };
    return placeholders[model.type] ?? '';
  };
}
