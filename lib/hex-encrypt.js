const { xorEncrypt } = require("./xor-encrypt");

/**
 * Encrypts a plaintext message using the given key.
 * @param {string} plaintext - The plaintext message to be encrypted.
 * @param {string} secretKey - The encryption key.
 * @returns {string} - The encrypted data in Hex format.
 */
function hexEncrypt(plaintext, secretKey) {
    const encryptedBuffer = xorEncrypt(plaintext, secretKey);
    return encryptedBuffer.toString('hex');
}

/**
 * Decrypts an encrypted message using the given key.
 * @param {string} encrypted - The encrypted data in Hex format.
 * @param {string} secretKey - The decryption key.
 * @returns {string} - The decrypted plaintext message.
 */
function hexDecrypt(encrypted, secretKey) {
    const encryptedBuffer = Buffer.from(encrypted, 'hex');
    const decryptedBuffer = xorEncrypt(encryptedBuffer, secretKey);
    return decryptedBuffer.toString('utf8');
}
const encryptedText = hexEncrypt("plaintext 123 $ ^ # @", "secretKeyfahimahammed--85348%$#$@");
console.log("en: ", encryptedText)
const decryptedText = hexDecrypt(encryptedText, "secretKeyfahimahammed--85348%$#$@");
console.log("de: ", decryptedText)
console.log("de: ", decryptedText)
console.log("de: ", decryptedText)

module.exports = {
    hexEncrypt,
    hexDecrypt
};