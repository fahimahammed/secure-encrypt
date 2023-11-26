/**
 * Encrypts a message using a shift value.
 * @param message - The message to be encrypted.
 * @param shift - The shift value for encryption.
 * @returns The encrypted message.
 */
const shiftedEncrypt = (message: string, shift: number): string => {
    let encryptedMessage = '';

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);

        if (message[i].match(/[a-z]/i)) {
            const base = message[i].toLowerCase() === message[i] ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            charCode = (charCode - base + shift) % 26 + base;
        }

        encryptedMessage += String.fromCharCode(charCode);
    }

    return encryptedMessage;
};

/**
 * Decrypts an encrypted message using a shift value.
 * @param encryptedMessage - The encrypted message.
 * @param shift - The shift value for decryption.
 * @returns The decrypted message.
 */
const shiftedDecrypt = (encryptedMessage: string, shift: number): string => {
    return shiftedEncrypt(encryptedMessage, 26 - shift);
};

export {
    shiftedEncrypt,
    shiftedDecrypt
};
