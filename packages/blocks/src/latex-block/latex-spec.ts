import {
  BlockViewExtension,
  CommandExtension,
  type ExtensionType,
} from '@blockexpanse/block-std';
import { literal } from 'lit/static-html.js';

import { commands } from './commands.js';

export const LatexBlockSpec: ExtensionType[] = [
  BlockViewExtension('affine:latex', literal`affine-latex`),
  CommandExtension(commands),
];
