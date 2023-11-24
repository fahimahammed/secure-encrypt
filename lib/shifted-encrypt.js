function shiftedEncrypt(message, shift) {
    let encryptedMessage = '';

    for (let i = 0; i < message.length; i++) {
        let charCode = message.charCodeAt(i);

        if (message[i].match(/[a-z]/i)) {
            let base = message[i] === message[i].toLowerCase() ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            charCode = (charCode - base + shift) % 26 + base;
        }

        encryptedMessage += String.fromCharCode(charCode);
    }

    return encryptedMessage;
}

function shiftedDecrypt(encryptedMessage, shift) {
    return shiftedEncrypt(encryptedMessage, 26 - shift);
}

// // Example usage
// const originalMessage = 'Hello, World!';
// const shift = 3;

// const encryptedMessage = shiftedEncrypt(originalMessage, shift);
// console.log('Encrypted:', encryptedMessage);

// const decryptedMessage = shiftedDecrypt(encryptedMessage, shift);
// console.log('Decrypted:', decryptedMessage);

// Export the encryption and decryption functions
module.exports = {
    shiftedEncrypt,
    shiftedDecrypt,
};