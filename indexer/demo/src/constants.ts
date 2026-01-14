/**
 * Constants for Indexer Demo
 */

// ============================================================================
// Network Configuration
// ============================================================================

/** Default indexer URL */
export const DEFAULT_INDEXER_URL = "https://smart-account-indexer.sdf-ecosystem.workers.dev";

/** Default RPC URL for Stellar testnet */
export const DEFAULT_RPC_URL = "https://soroban-testnet.stellar.org";

// ============================================================================
// Ledger Constants
// ============================================================================

/** Approximate number of ledgers per day (~5 seconds per ledger) */
export const LEDGERS_PER_DAY = 17280;

/** Number of stroops (smallest unit) per XLM */
export const STROOPS_PER_XLM = 10_000_000;

// ============================================================================
// Display Constants
// ============================================================================

/** Number of characters to show at start of truncated address */
export const TRUNCATE_START_CHARS = 8;

/** Number of characters to show at end of truncated address */
export const TRUNCATE_END_CHARS = 8;

/**
 * Truncate a contract ID or address for display
 */
export function truncateAddress(address: string, startChars = TRUNCATE_START_CHARS, endChars = TRUNCATE_END_CHARS): string {
  if (address.length <= startChars + endChars + 3) {
    return address;
  }
  return `${address.slice(0, startChars)}...${address.slice(-endChars)}`;
}
