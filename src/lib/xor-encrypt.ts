/**
 * Performs XOR encryption and decryption.
 * @param input - The input data to be encrypted or decrypted.
 * @param secretKey - The encryption/decryption key.
 * @returns The encrypted or decrypted data as a Buffer.
 */
const xorEncrypt = (input: string | Buffer, secretKey: string): Buffer => {
    const inputBuffer: Buffer =
        typeof input === 'string' ? Buffer.from(input, 'utf8') : input as Buffer;

    const keyBuffer: Buffer = Buffer.from(secretKey, 'utf8');
    const resultBuffer: Buffer = Buffer.alloc(inputBuffer.length);

    for (let i = 0; i < inputBuffer.length; i++) {
        resultBuffer[i] = inputBuffer[i] ^ keyBuffer[i % keyBuffer.length];
    }

    return resultBuffer;
};

export {
    xorEncrypt
};
