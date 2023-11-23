# secure-encrypt

A simple data encryption package for Node.js using the `crypto` module.

## Installation

```bash
npm install secure-encrypt
```

## Usage

**CommonJS (Node.js) Syntax**

```javascript
const secureEncrypt = require('secure-encrypt');

// Your secret key (keep this secret!)
const secretKey = 'mySecretKey';

// Text to encrypt
const plaintext = 'Hello, secure-encrypt!';

// Encrypt the text
const encryptedText = secureEncrypt.encrypt(plaintext, secretKey);
console.log('Encrypted:', encryptedText);

// Decrypt the text
const decryptedText = secureEncrypt.decrypt(encryptedText, secretKey);
console.log('Decrypted:', decryptedText);

```

**ES6 (ECMAScript 2015 and later) Syntax**

```javascript
import secureEncrypt from 'secure-encrypt';

// Your secret key (keep this secret!)
const secretKey = 'mySecretKey';

// Text to encrypt
const plaintext = 'Hello, secure-encrypt!';

// Encrypt the text
const encryptedText = secureEncrypt.encrypt(plaintext, secretKey);
console.log('Encrypted:', encryptedText);

// Decrypt the text
const decryptedText = secureEncrypt.decrypt(encryptedText, secretKey);
console.log('Decrypted:', decryptedText);
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