import { defineConfig } from 'vitepress';
import wasm from 'vite-plugin-wasm';
import container from 'markdown-it-container';
import { renderSandbox } from 'vitepress-plugin-sandpack';
import { guide, reference, components } from './sidebar';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'BlockExpanse',
  description: 'BlockExpanse — Block editor toolkit',
  vite: {
    build: {
      target: 'ES2022',
    },
    plugins: [
      wasm(),
      {
        name: 'redirect-plugin',
        configureServer(server) {
          server.middlewares.use((req, res, next) => {
            if (req.url === '/blockexpanse-overview.html') {
              res.writeHead(301, { Location: '/guide/overview.html' });
              res.end();
            } else {
              next();
            }
          });
        },
      },
    ],
  },
  lang: 'en-US',
  head: [
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outline: [2, 3],

    nav: [
      {
        text: 'Components',
        link: '/components/overview',
        activeMatch: '/components/*',
      },
      {
        text: 'Framework',
        link: '/guide/overview',
        activeMatch: '/guide/*',
      },
      {
        text: 'Playground',
        link: '/guide/quick-start',
      },
      {
        text: 'More',
        items: [
          { text: 'Blog', link: '/blog/', activeMatch: '/blog/*' },
          {
            text: 'API',
            link: '/api/',
            activeMatch: '/api/*',
          },
          {
            text: 'Releases',
            link: '/guide/overview',
          },
        ],
      },
    ],

    sidebar: {
      '/guide/': { base: '/', items: guide },
      '/api/': { base: '/', items: reference },
      '/components/': { base: '/', items: components },
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Alan-Cusack/blockexpanse' },
    ],

    footer: {
      copyright: 'Copyright © BlockExpanse',
    },

    search: {
      provider: 'local',
    },
  },
  markdown: {
    config(md) {
      md.use(container, 'code-sandbox', {
        render(tokens, idx) {
          return renderSandbox(tokens, idx, 'code-sandbox');
        },
      });
    },
  },
});
