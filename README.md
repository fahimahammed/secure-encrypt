# secure-encrypt

`secure-encrypt` is an npm package designed for use with ES6 (JavaScript) and TypeScript, providing a versatile encryption and decryption functionality. It supports three different encryption techniques: character substitution, hexadecimal encoding, and Caesar shift. By combining these methods, `secure-encrypt` offers a robust and customizable encryption solution.

## Installation
To install secure-encrypt in your ES6 (JavaScript) or TypeScript project, use the following npm command:

```bash
npm install secure-encrypt
```
or, 
```bash
yarn add secure-encrypt
```

## Usage
#### Importing the Module

```javascript
import { encrypt, decrypt } from 'secure-encrypt';
```

### Encrypting a Message
To encrypt a plaintext message, use the `encrypt` function:
```javascript
const plaintext = "Hello, World!";
const secretKey = "mySecretKey";

const encryptedText = encrypt(plaintext, secretKey);
console.log("Encrypted Text:", encryptedText);
```

### Decrypting a Message
To decrypt an encrypted message, use the `decrypt` function:
```javascript
const encryptedText = "encryptedTextHere";
const secretKey = "mySecretKey";

const decryptedText = decrypt(encryptedText, secretKey);
console.log("Decrypted Text:", decryptedText);

```


## File Message Encryption and Decryption
Here's the documentation for file message encryption and decryption using the `secure-encrypt` npm package:

### File Encryption
To encrypt the content of a file using `secure-encrypt`, follow these steps:

1. **Import Module:**
   Import the `encrypt` function from the `secure-encrypt` package.
   ```javascript
   import { encrypt } from 'secure-encrypt';
   ```

2. **Read File Content:**
   Use a function to read the text content from the file.
   ```javascript
   const fs = require('fs');
   const readFromFile = (filePath) => {
       return fs.readFileSync(filePath, 'utf8');
   };
   ```

3. **Encrypt and Write to File:**
   Encrypt the content obtained from the file using the `encrypt` function and write the encrypted text back to the file.
   ```javascript
   const encryptFile = (filePath, secretKey) => {
       const plaintext = readFromFile(filePath);
       const encryptedText = encrypt(plaintext, secretKey);
       writeToFile(filePath, encryptedText);
       console.log('Encryption completed. Encrypted text is written to', filePath);
   };
   ```

4. **Execute Encryption:**
   Call the `encryptFile` function with the file path and the secret key.
   ```javascript
   const inputFilePath = 'input.txt';
   const secretKey = 'mySecretKey';
   encryptFile(inputFilePath, secretKey);
   ```

### File Decryption
To decrypt the content of an encrypted file using `secure-encrypt`, follow these steps:

1. **Import Module:**
   Import the `decrypt` function from the `secure-encrypt` package.
   ```javascript
   import { decrypt } from 'secure-encrypt';
   ```

2. **Decrypt and Write to File:**
   Decrypt the content obtained from the encrypted file using the `decrypt` function and write the decrypted text back to the file.
   ```javascript
   const decryptFile = (filePath, secretKey) => {
       const encryptedText = readFromFile(filePath);
       const decryptedText = decrypt(encryptedText, secretKey);
       writeToFile(filePath, decryptedText);
       console.log('Decryption completed. Decrypted text is written to', filePath);
   };
   ```

3. **Execute Decryption:**
   Call the `decryptFile` function with the file path and the secret key.
   ```javascript
   const inputFilePath = 'input.txt'; // Path to the encrypted file
   const secretKey = 'mySecretKey';
   decryptFile(inputFilePath, secretKey);
   ```

#### Example Code:
```javascript
const fs = require('fs');
const { encrypt, decrypt } = require('secure-encrypt');

// Function to read text from a file
const readFromFile = (filePath) => {
    return fs.readFileSync(filePath, 'utf8');
};

// Function to write text to a file
const writeToFile = (filePath, data) => {
    fs.writeFileSync(filePath, data, 'utf8');
};

// Function to encrypt the content of a file and overwrite it
const encryptFile = (filePath, secretKey) => {
    const plaintext = readFromFile(filePath);
    const encryptedText = encrypt(plaintext, secretKey);
    writeToFile(filePath, encryptedText);
    console.log('Encryption completed. Encrypted text is written to', filePath);
};

// Function to decrypt the content of a file and overwrite it
const decryptFile = (filePath, secretKey) => {
    const encryptedText = readFromFile(filePath);
    const decryptedText = decrypt(encryptedText, secretKey);
    writeToFile(filePath, decryptedText);
    console.log('Decryption completed. Decrypted text is written to', filePath);
};

// Input file path
const inputFilePath = 'input.txt'; // Replace 'input.txt' with the path to your file

// Secret key
const secretKey = 'mySecretKey'; // Replace 'mySecretKey' with your secret key

// Encrypt the content of the file
encryptFile(inputFilePath, secretKey);

// Decrypt the content of the file
decryptFile(inputFilePath, secretKey);
```

Ensure you replace `'input.txt'` with the actual path to your file and `'mySecretKey'` with your secret key before executing the code.

## Documentation
**encrypt(plaintext, secretKey)**
Encrypts the provided plaintext using the specified secret key.

- `plaintext` (string): The text to encrypt.
- `secretKey` (string): The secret key for encryption.
- Returns: The encrypted text (base64-encoded).

**decrypt(encryptedText, secretKey)**
Decrypts the provided encrypted text using the specified secret key.

- `encryptedText` (string): The text to decrypt (base64-encoded).
- `secretKey` (string): The secret key for decryption.
- Returns: The decrypted text.


## Security Considerations
- **Secret Key:** Keep your secret key confidential. Avoid hardcoding it in your code and consider using environment variables for increased security.
- **Key Management:** Implement secure key management practices to protect against unauthorized access.
- **Algorithm Updates:** Stay informed about cryptographic best practices and algorithm updates to ensure the security of your encrypted data.

## Support and Contribution
For bug reports, feature requests, or general inquiries, please create an issue on the [GitHub repository](https://github.com/fahimahammed/secure-encrypt).

Contributions are welcome! Fork the repository, make your changes, and submit a pull request.


## Acknowledgments
The secure-encrypt package is inspired by the need for a versatile encryption solution with a combination of different techniques

##
