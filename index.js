// index.js

const crypto = require('crypto');

/**
 * Encrypt a plaintext using a secret key.
 * @param {string} plaintext - The text to encrypt.
 * @param {string} secretKey - The secret key for encryption.
 * @returns {string} - The encrypted text (base64-encoded).
 */
function encrypt(plaintext, secretKey) {
    const cipher = crypto.createCipher('aes-256-cbc', secretKey);
    let encrypted = cipher.update(plaintext, 'utf-8', 'base64');
    encrypted += cipher.final('base64');
    return encrypted;
}

/**
 * Decrypt an encrypted text using a secret key.
 * @param {string} encryptedText - The text to decrypt (base64-encoded).
 * @param {string} secretKey - The secret key for decryption.
 * @returns {string} - The decrypted text.
 */
function decrypt(encryptedText, secretKey) {
    const decipher = crypto.createDecipher('aes-256-cbc', secretKey);
    let decrypted = decipher.update(encryptedText, 'base64', 'utf-8');
    decrypted += decipher.final('utf-8');
    return decrypted;
}

// Export the encryption and decryption functions
module.exports = {
    encrypt,
    decrypt,
};
