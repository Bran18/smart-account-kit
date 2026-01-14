#!/usr/bin/env node

/**
 * Syncs the version from package.json to src/version.ts
 * Run with: pnpm run version:sync
 */

import { readFileSync, writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

const packageJson = JSON.parse(
  readFileSync(join(rootDir, "package.json"), "utf-8")
);

const versionContent = `/**
 * Package version - auto-generated from package.json
 * @packageDocumentation
 */

// This file is auto-generated. Do not edit manually.
// Run \`pnpm run version:sync\` to update.

export const VERSION = "${packageJson.version}";
export const NAME = "${packageJson.name}";
`;

writeFileSync(join(rootDir, "src/version.ts"), versionContent);

console.log(`✓ Synced version to ${packageJson.version}`);
