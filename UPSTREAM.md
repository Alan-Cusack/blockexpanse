# Upstream and Compatibility

BlockExpanse is maintained as an independent fork of BlockSuite, the editor
framework originally developed by the AFFiNE and ToEverything contributors.
The initial BlockExpanse codebase was derived from BlockSuite v0.19.5 and is
licensed under the Mozilla Public License 2.0.

## Attribution

Copyright and license notices from upstream source files and vendored packages
are preserved. Packages that remain substantially vendored keep their upstream
author metadata. Packages maintained and published as part of BlockExpanse use
`BlockExpanse Contributors` as their package author.

Relevant upstream projects include:

- BlockSuite: https://github.com/toeverything/blocksuite
- AFFiNE: https://github.com/toeverything/AFFiNE

## Stable Data Identifiers

Existing `affine:*` block flavours are persistent document identifiers rather
than product branding. They are retained for compatibility with saved
snapshots, Yjs collaborative documents, clipboard payloads, adapters, and
third-party integrations.

Changing a flavour requires an explicit, versioned data migration. UI names,
public API aliases, documentation, and package descriptions may adopt
BlockExpanse terminology without rewriting these persisted identifiers.

## Public API Migration

New public APIs should use BlockExpanse terminology. Existing `Affine*` exports
remain available as compatibility names until a documented major-version
migration provides replacements and a removal schedule.
