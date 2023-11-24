const { charEncrypt, charDecrypt } = require("./lib/char-encrypt");
const { shiftedEncrypt, shiftedDecrypt } = require("./lib/shifted-encrypt");

/**
 * Encrypt a plaintext using a secret key.
 * @param {string} plaintext - The text to encrypt.
 * @param {string} secretKey - The secret key for encryption.
 * @returns {string} - The encrypted text (base64-encoded).
 */
function encrypt(plaintext, secretKey) {
    let encryptedMessage = charEncrypt(plaintext, secretKey);
    encryptedMessage = shiftedEncrypt(encryptedMessage, secretKey.length % 26);
    return encryptedMessage;
}


/**
 * Decrypt an encrypted text using a secret key.
 * @param {string} encryptedText - The text to decrypt (base64-encoded).
 * @param {string} secretKey - The secret key for decryption.
 * @returns {string} - The decrypted text.
 */
function decrypt(encryptedText, secretKey) {
    let decryptedMessage = shiftedDecrypt(encryptedText, secretKey.length % 26);
    decryptedMessage = charDecrypt(decryptedMessage, secretKey)
    return decryptedMessage;
}

// Export the encryption and decryption functions
module.exports = {
    encrypt,
    decrypt,
};
