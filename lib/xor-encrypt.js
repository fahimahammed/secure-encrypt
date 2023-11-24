/**
 * Performs XOR encryption and decryption.
 * @param {string | Buffer} input - The input data to be encrypted or decrypted.
 * @param {string} secretKey - The encryption/decryption key.
 * @returns {Buffer} - The encrypted or decrypted data as a Buffer.
 */

function xorEncrypt(input, secretKey) {
    const inputBuffer = Buffer.from(input, 'utf8');
    const keyBuffer = Buffer.from(secretKey, 'utf8');
    const resultBuffer = Buffer.alloc(inputBuffer.length);

    for (let i = 0; i < inputBuffer.length; i++) {
        resultBuffer[i] = inputBuffer[i] ^ keyBuffer[i % keyBuffer.length];
    }

    return resultBuffer;
}


module.exports = {
    xorEncrypt
};