#!/usr/bin/env node
/**
 * Publish all non-private workspaces to CNB.
 * Requires CNB_TOKEN in the environment (only for this command).
 */
import { spawnSync } from 'node:child_process';

const token = process.env.CNB_TOKEN;
if (!token) {
  console.error(
    'Missing CNB_TOKEN. Example:\n  export CNB_TOKEN=your_token\n  yarn ci:publish:cnb'
  );
  process.exit(1);
}

const registry = 'https://npm.cnb.cool/LiaoJ/blockexpanse-server/-/packages/';
const env = {
  ...process.env,
  // Yarn reads these without needing ${CNB_TOKEN} in .yarnrc.yml
  YARN_NPM_AUTH_TOKEN: token,
  YARN_NPM_PUBLISH_REGISTRY: registry,
};

function run(command, args) {
  const result = spawnSync(command, args, {
    stdio: 'inherit',
    env,
    shell: false,
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}

run('yarn', ['build:packages']);
run('yarn', [
  'workspaces',
  'foreach',
  '-Ap',
  '--no-private',
  'npm',
  'publish',
  '--access',
  'public',
  '--tag',
  'latest',
]);
