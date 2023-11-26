import { xorEncrypt } from "./xor-encrypt";

/**
 * Encrypts a plaintext message using the given key.
 * @param plaintext - The plaintext message to be encrypted.
 * @param secretKey - The encryption key.
 * @returns The encrypted data in Hex format.
 */
const hexEncrypt = (plaintext: string, secretKey: string): string => {
    const encryptedBuffer: Buffer = xorEncrypt(plaintext, secretKey);
    return encryptedBuffer.toString('hex');
};

/**
 * Decrypts an encrypted message using the given key.
 * @param encrypted - The encrypted data in Hex format.
 * @param secretKey - The decryption key.
 * @returns The decrypted plaintext message.
 */
const hexDecrypt = (encrypted: string, secretKey: string): string => {
    const encryptedBuffer: Buffer = Buffer.from(encrypted, 'hex');
    const decryptedBuffer: Buffer = xorEncrypt(encryptedBuffer, secretKey);
    return decryptedBuffer.toString('utf8');
};

export {
    hexEncrypt,
    hexDecrypt
};
