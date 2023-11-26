import { charEncrypt, charDecrypt } from "./lib/char-encrypt";
import { hexEncrypt, hexDecrypt } from "./lib/hex-encrypt";
import { shiftedEncrypt, shiftedDecrypt } from "./lib/shifted-encrypt";

/**
 * Encrypt a plaintext using a secret key.
 * @param plaintext - The text to encrypt.
 * @param secretKey - The secret key for encryption.
 * @returns The encrypted text (base64-encoded).
 */
export const encrypt = (plaintext: string, secretKey: string): string => {
    let encryptedMessage: string = charEncrypt(plaintext, secretKey);
    encryptedMessage = shiftedEncrypt(encryptedMessage, secretKey.length % 26);
    encryptedMessage = hexEncrypt(encryptedMessage, secretKey);
    return encryptedMessage;
};

/**
 * Decrypt an encrypted text using a secret key.
 * @param encryptedText - The text to decrypt (base64-encoded).
 * @param secretKey - The secret key for decryption.
 * @returns The decrypted text.
 */
export const decrypt = (encryptedText: string, secretKey: string): string => {
    let decryptedMessage: string = hexDecrypt(encryptedText, secretKey);
    decryptedMessage = shiftedDecrypt(decryptedMessage, secretKey.length % 26);
    decryptedMessage = charDecrypt(decryptedMessage, secretKey);
    return decryptedMessage;
};
