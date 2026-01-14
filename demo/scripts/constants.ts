/**
 * Constants for demo scripts
 */

import { Networks } from "@stellar/stellar-sdk";

// ============================================================================
// Network Configuration
// ============================================================================

/** Default RPC URL for Stellar testnet */
export const DEFAULT_RPC_URL = "https://soroban-testnet.stellar.org";

/** Stellar Friendbot URL for testnet funding */
export const FRIENDBOT_URL = "https://friendbot.stellar.org";

/** Native XLM token contract on testnet */
export const NATIVE_TOKEN_CONTRACT = "CDLZFC3SYJYDZT7K67VZ75HPJVIEUVNIXF47ZG2FB2RMQQVU2HHGCYSC";

/** Test destination contract address */
export const TEST_DESTINATION = "CCIYFQ4FCK3WJ3YYUQPDEZZUVB63ZKMGBGOKGI5ZGT6HXUGHHAEHS2RE";

// ============================================================================
// Conversion Constants
// ============================================================================

/** Number of stroops per XLM (1 XLM = 10,000,000 stroops) */
export const STROOPS_PER_XLM = 10_000_000;

// ============================================================================
// Transaction Constants
// ============================================================================

/** Default transaction timeout in seconds */
export const DEFAULT_TX_TIMEOUT_SECONDS = 30;

/** Maximum retry attempts for transaction confirmation */
export const MAX_CONFIRMATION_RETRIES = 30;

/** Delay between confirmation checks in milliseconds */
export const CONFIRMATION_CHECK_DELAY_MS = 1000;

// ============================================================================
// Deployer Configuration
// ============================================================================

/** Entropy string for deterministic deployer keypair derivation */
export const DEPLOYER_ENTROPY = "openzeppelin-smart-account-kit";

// ============================================================================
// Default Config Object
// ============================================================================

export const CONFIG = {
  rpcUrl: DEFAULT_RPC_URL,
  networkPassphrase: Networks.TESTNET,
  nativeTokenContract: NATIVE_TOKEN_CONTRACT,
};
