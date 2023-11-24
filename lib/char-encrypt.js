function charEncrypt(message, secretKey) {
    const key = secretKey.length % 921001;
    let encryptedMessage = '';
    for (let i = 0; i < message.length; i++) {
        encryptedMessage += String.fromCharCode(message.charCodeAt(i) ^ key);
    }
    return encryptedMessage;
}

function charDecrypt(encryptedMessage, secretKey) {
    return charEncrypt(encryptedMessage, secretKey);
}

module.exports = {
    charEncrypt,
    charDecrypt,
};
