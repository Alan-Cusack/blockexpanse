import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig(_configEnv =>
  defineConfig({
    esbuild: { target: 'es2018' },
    optimizeDeps: {
      force: true,
      esbuildOptions: {
        // Vitest hardcodes the esbuild target to es2020,
        // override it to es2022 for top level await.
        target: 'es2022',
      },
    },
    test: {
      include: ['src/__tests__/**/*.spec.ts'],
      browser: {
        enabled: true,
        headless: process.env.CI === 'true',
        name: 'chromium',
        provider: 'playwright',
        isolate: false,
        providerOptions: {},
      },
      coverage: {
        provider: 'istanbul', // or 'c8'
        reporter: ['lcov'],
        reportsDirectory: '../../.coverage/presets',
      },
      deps: {
        interopDefault: true,
      },
      testTransformMode: {
        web: ['src/__tests__/**/*.spec.ts'],
      },
      alias: [
        {
          find: /^@blockexpanse\/blocks\/widgets\/slash-menu\/config$/,
          replacement: path.resolve(
            fileURLToPath(
              new URL(
                '../blocks/src/root-block/widgets/slash-menu/config.ts',
                import.meta.url
              )
            )
          ),
        },
        {
          find: /^@blockexpanse\/blocks\/widgets\/slash-menu$/,
          replacement: path.resolve(
            fileURLToPath(
              new URL(
                '../blocks/src/root-block/widgets/slash-menu/index.ts',
                import.meta.url
              )
            )
          ),
        },
        {
          find: /^@blockexpanse\/blocks\/(.+)$/,
          replacement: path
            .resolve(fileURLToPath(new URL('../blocks/src', import.meta.url)))
            .concat('/$1.ts'),
        },
        {
          find: /^@blockexpanse\/blocks$/,
          replacement: path.resolve(
            fileURLToPath(new URL('../blocks/src/index.ts', import.meta.url))
          ),
        },
        {
          find: /^@blockexpanse\/global\/(.+)$/,
          replacement: path
            .resolve(
              fileURLToPath(new URL('../framework/global/src', import.meta.url))
            )
            .concat('/$1/index.ts'),
        },
        {
          find: /^@blockexpanse\/store$/,
          replacement: path.resolve(
            fileURLToPath(
              new URL('../framework/store/src/index.ts', import.meta.url)
            )
          ),
        },
        {
          find: /^@blockexpanse\/inline\/(.+)$/,
          replacement: path
            .resolve(
              fileURLToPath(new URL('../framework/inline/src', import.meta.url))
            )
            .concat('/$1.ts'),
        },
        {
          find: /^@blockexpanse\/inline$/,
          replacement: path.resolve(
            fileURLToPath(
              new URL('../framework/inline/src/index.ts', import.meta.url)
            )
          ),
        },
      ],
    },
  })
);
