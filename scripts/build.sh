#!/bin/bash

# Build Script for Smart Account Kit SDK
#
# Syncs version to src/version.ts and builds the SDK.
# Assumes bindings are already available (via npm or local build).

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
KIT_DIR="$(dirname "$SCRIPT_DIR")"

# Colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

echo -e "${BLUE}Building smart-account-kit${NC}"
echo ""

cd "$KIT_DIR"

# Sync version to src/version.ts
echo -e "${YELLOW}Syncing version...${NC}"
pnpm run version:sync

# Build
echo -e "${YELLOW}Building...${NC}"
pnpm run build

VERSION=$(node -p "require('./package.json').version")
echo ""
echo -e "${GREEN}smart-account-kit built (v$VERSION)${NC}"
