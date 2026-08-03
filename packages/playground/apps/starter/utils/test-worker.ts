// This file is used to test blockexpanse can run in a web worker. SEE: tests/worker.spec.ts

import '@blockexpanse/store';
// import '@blockexpanse/block-std'; // seems not working
import '@blockexpanse/blocks/schemas';

globalThis.onmessage = event => {
  const { data } = event;
  if (data === 'ping') {
    postMessage('pong');
  }
};
