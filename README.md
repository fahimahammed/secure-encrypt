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
The secure-encrypt package is inspired by the need for a versatile encryption solution with a combination of different techniques.