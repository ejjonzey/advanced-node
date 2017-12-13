// buffer.from creates buffer with different args
// buffer has no character encoding 
// 2nd console.log "<Buffer 74 6f 75 63 68 65> 6"

const string = 'touche';
const buffer = Buffer.from('touche');

console.log(string, string.length);
console.log(buffer, buffer.length);