import CryptoJS from "crypto-js";

const useAES256 = () => {
  const key = "aW50b2JlbG9DYWx5b25hbWF0dGVuZDIwMjAwMyMjIyM=";

  function encryptAES256(msg: string): string {
    if (!msg) {
      return msg;
    }

    const saltBytes = CryptoJS.lib.WordArray.random(20);
    const keyBytes = CryptoJS.PBKDF2(key, saltBytes, {
      keySize: 256 / 32,
      iterations: 7,
      hasher: CryptoJS.algo.SHA1,
    });

    const ivBytes = CryptoJS.lib.WordArray.random(16);
    const encrypted = CryptoJS.AES.encrypt(msg, keyBytes, {
      iv: ivBytes,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });

    const buffer = saltBytes
      .clone()
      .concat(ivBytes)
      .concat(encrypted.ciphertext);

    return CryptoJS.enc.Base64.stringify(buffer);
  }

  function decryptAES256(msg: string): string {
    if (!msg) {
      return msg;
    }

    const buffer = CryptoJS.enc.Base64.parse(msg);

    const saltBytes: number[] = buffer.words.slice(0, 5);
    const ivBytes: number[] = buffer.words.slice(5, 9);
    const ciphertextBytes: number[] = buffer.words.slice(9);

    const keyBytes = CryptoJS.PBKDF2(
      key,
      CryptoJS.lib.WordArray.create(saltBytes),
      {
        keySize: 256 / 32,
        iterations: 7,
        hasher: CryptoJS.algo.SHA1,
      },
    );

    const decrypted = CryptoJS.AES.decrypt(
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      { ciphertext: CryptoJS.lib.WordArray.create(ciphertextBytes) },
      keyBytes,
      {
        iv: CryptoJS.lib.WordArray.create(ivBytes),
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7,
      },
    );

    return decrypted.toString(CryptoJS.enc.Utf8);
  }

  return { encryptAES256, decryptAES256 };
};

export default useAES256;
