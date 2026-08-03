// Copies style.css into packages/theme/dist after tsc.
// tsc only emits JS/d.ts; non-TS assets must be copied separately so the
// published "./style.css" subpath (./dist/style.css) resolves at runtime.
import { copyFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const src = join(__dirname, '..', 'packages', 'theme', 'src', 'style.css');
const dest = join(__dirname, '..', 'packages', 'theme', 'dist', 'style.css');

await mkdir(dirname(dest), { recursive: true });
await copyFile(src, dest);
console.log('copied style.css -> packages/theme/dist/style.css');
