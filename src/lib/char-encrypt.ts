import { keyDivider } from "../constants";

/**
 * Encrypts a message using a secret key.
 * @param message - The message to be encrypted.
 * @param secretKey - The secret key for encryption.
 * @returns The encrypted message.
 */
const charEncrypt = (message: string, secretKey: string): string => {
    const key = secretKey.length % keyDivider;
    let encryptedMessage = '';

    for (let i = 0; i < message.length; i++) {
        encryptedMessage += String.fromCharCode(message.charCodeAt(i) ^ key);
    }

    return encryptedMessage;
};

/**
 * Decrypts an encrypted message using a secret key.
 * @param encryptedMessage - The encrypted message.
 * @param secretKey - The secret key for decryption.
 * @returns The decrypted message.
 */
const charDecrypt = (encryptedMessage: string, secretKey: string): string => {
    return charEncrypt(encryptedMessage, secretKey);
};

export {
    charEncrypt,
    charDecrypt
};
