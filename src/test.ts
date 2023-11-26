import secureEncrypt from './index';

const message = "fAhIM AHAMMedFir# siThY@12 9*&|+-/;45 34 73 FaS832###)\}'0f";
const key = "asdfFF#@9821sakf"
const encryptedMessage = secureEncrypt.encrypt(message, key);
console.log("encrypt: ", encryptedMessage);

const decryptedMessage = secureEncrypt.decrypt(encryptedMessage, key);
console.log("decrypt: ", decryptedMessage)