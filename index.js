// https://nodejs.org/api/crypto.html#crypto
const { createHash } = await import('node:crypto');

const text = process.env.MYAPP_ORIGINAL_TEXT || 'test.txt';

const now = new Date();
const uploadedTime = now.getTime();

const digestHex = createHash('sha256').update(text).digest('hex');

/*

// browser side example : https://developer.mozilla.org/ja/docs/Web/API/SubtleCrypto/digest#sha-256

const text = 'test.txt';

async function digestMessage(message) {
  const msgUint8 = new TextEncoder().encode(message);                           // (utf-8 の) Uint8Array にエンコードする
  const hashBuffer = await crypto.subtle.digest('SHA-256', msgUint8);           // メッセージをハッシュする
  const hashArray = Array.from(new Uint8Array(hashBuffer));                     // バッファーをバイト列に変換する
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join(''); // バイト列を16進文字列に変換する
  return hashHex;
}

const digestHex = await digestMessage(text);
const now = new Date();
const uploadedTime = now.getTime()
*/

console.log(`${uploadedTime}-${digestHex}`);
