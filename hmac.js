const crypto=require('crypto');
const secret='abcdefg';
const hash=crypto.createHmac('sha256',secret).update('aitsrajampet').digest('hex');
console.log(hash);