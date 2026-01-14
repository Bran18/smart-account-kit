import { Keypair, hash } from "@stellar/stellar-sdk";
import { DEPLOYER_ENTROPY } from "./constants";

// Historical entropy from passkey-kit
const PASSKEY_KIT_ENTROPY = "kalepail";

// passkey-kit entropy
const passkeyKitKeypair = Keypair.fromRawEd25519Seed(
  hash(Buffer.from(PASSKEY_KIT_ENTROPY))
);

// smart-account-kit entropy
const smartAccountKitKeypair = Keypair.fromRawEd25519Seed(
  hash(Buffer.from(DEPLOYER_ENTROPY))
);

console.log("=== Deployer Account Comparison ===\n");

console.log(`passkey-kit (entropy: '${PASSKEY_KIT_ENTROPY}'):`);
console.log("  Public Key:", passkeyKitKeypair.publicKey());
console.log("");

console.log(`smart-account-kit (entropy: '${DEPLOYER_ENTROPY}'):`);
console.log("  Public Key:", smartAccountKitKeypair.publicKey());
console.log("");

console.log("=== Fund the account you want to use ===");
