import { encrypt, decrypt } from './index';

const message = "fAhIM AHAMMedFir# siThY@12 9*&|+-/;45 34 73 FaS832###)\}'0f";
const key = "asdfFF#@9821sakf"
const encryptedMessage = encrypt(message, key);
console.log("encrypt: ", encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage, key);
console.log("decrypt: ", decryptedMessage)