import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import ts from 'typescript';

const root = process.cwd();
const sourceRoot = path.join(root, 'packages');
const ignoredDirectories = new Set([
  '__tests__',
  'coverage',
  'dist',
  'node_modules',
  'snapshots',
]);
const sourceExtensions = new Set(['.ts', '.tsx']);
const markers = [
  { key: 'todo', pattern: /\bTODO\b/g },
  { key: 'fixme', pattern: /\bFIXME\b/g },
  { key: 'deprecated', pattern: /@deprecated\b/g },
];

async function collectSourceFiles(directory, files = []) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (entry.isDirectory() && ignoredDirectories.has(entry.name)) continue;

    const absolutePath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      await collectSourceFiles(absolutePath, files);
    } else if (sourceExtensions.has(path.extname(entry.name))) {
      files.push(absolutePath);
    }
  }
  return files;
}

function extractComments(content) {
  const scanner = ts.createScanner(
    ts.ScriptTarget.Latest,
    false,
    ts.LanguageVariant.Standard,
    content
  );
  const comments = [];

  for (let token = scanner.scan(); token !== ts.SyntaxKind.EndOfFileToken; ) {
    if (
      token === ts.SyntaxKind.SingleLineCommentTrivia ||
      token === ts.SyntaxKind.MultiLineCommentTrivia
    ) {
      comments.push(scanner.getTokenText());
    }
    token = scanner.scan();
  }

  return comments.join('\n');
}

function countMatches(comments, pattern) {
  return Array.from(comments.matchAll(pattern)).length;
}

const files = await collectSourceFiles(sourceRoot);
const rows = [];
const totals = { todo: 0, fixme: 0, deprecated: 0, legacyFiles: 0 };

for (const file of files) {
  const content = await readFile(file, 'utf8');
  const comments = extractComments(content);
  const counts = Object.fromEntries(
    markers.map(({ key, pattern }) => [key, countMatches(comments, pattern)])
  );
  const legacyFile = /(^|[/\\])legacy[^/\\]*\.(ts|tsx)$/.test(file) ? 1 : 0;

  if (Object.values(counts).some(Boolean) || legacyFile) {
    const relativePath = path.relative(root, file);
    rows.push({ file: relativePath, ...counts, legacyFiles: legacyFile });
    for (const key of Object.keys(totals)) totals[key] += rows.at(-1)[key];
  }
}

rows.sort((left, right) => {
  const leftTotal = left.todo + left.fixme + left.deprecated + left.legacyFiles;
  const rightTotal =
    right.todo + right.fixme + right.deprecated + right.legacyFiles;
  return rightTotal - leftTotal || left.file.localeCompare(right.file);
});

console.log('BlockExpanse technical debt report');
console.log(`Source files scanned: ${files.length}`);
console.log(
  `TODO: ${totals.todo} | FIXME: ${totals.fixme} | deprecated: ${totals.deprecated} | legacy files: ${totals.legacyFiles}`
);

if (rows.length) {
  console.log('\nTop affected files:');
  for (const row of rows.slice(0, 20)) {
    console.log(
      `${row.file} (TODO ${row.todo}, FIXME ${row.fixme}, deprecated ${row.deprecated}, legacy ${row.legacyFiles})`
    );
  }
}
