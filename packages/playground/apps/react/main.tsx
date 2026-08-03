import type { Doc } from '@blockexpanse/store';

import { effects as blocksEffects } from '@blockexpanse/blocks/effects';
import { createEmptyDoc, PageEditor } from '@blockexpanse/presets';
import { effects as presetsEffects } from '@blockexpanse/presets/effects';
import { Text } from '@blockexpanse/store';
/**
 * React integration example.
 *
 * BlockExpanse editors are native Web Components. In React, mount them via
 * a ref and set the `doc` property in useEffect (React doesn't pass non-
 * string attributes to custom elements, so we use the imperative API).
 *
 * URL: /react/
 */
import { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';

import '../../style.css';

// Register all Web Components (required)
blocksEffects();
presetsEffects();

function App() {
  const editorRef = useRef<PageEditor | null>(null);
  const [doc] = useState<Doc>(() => createEmptyDoc().init());

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.doc = doc;
    }

    // Write welcome content
    const paragraph = doc.getBlockByFlavour('affine:paragraph')[0];
    if (paragraph) {
      doc.updateBlock(paragraph, {
        text: new Text(
          'Hello from React! Edit me, try "/" for the slash menu.'
        ),
      });
    }
  }, [doc]);

  return (
    <>
      <h1
        style={{
          padding: '16px 24px',
          margin: 0,
          fontSize: '18px',
          color: '#666',
        }}
      >
        BlockExpanse + React
      </h1>
      {/* @ts-expect-error -- page-editor is a custom element not in React's JSX intrinsic types */}
      <page-editor ref={editorRef} style={{ display: 'block' }} />
    </>
  );
}

const root = createRoot(document.body);
root.render(<App />);
