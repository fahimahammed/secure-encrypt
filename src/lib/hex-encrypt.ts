import { xorEncrypt } from "./xor-encrypt";

const hexEncrypt = (plaintext: string, secretKey: string): string => {
    const encryptedBuffer: Buffer = xorEncrypt(plaintext, secretKey);
    return encryptedBuffer.toString('hex');
};

const hexDecrypt = (encrypted: string, secretKey: string): string => {
    const encryptedBuffer: Buffer = Buffer.from(encrypted, 'hex');
    const decryptedBuffer: Buffer = xorEncrypt(encryptedBuffer, secretKey);
    return decryptedBuffer.toString('utf8');
};

export {
    hexEncrypt,
    hexDecrypt
};
