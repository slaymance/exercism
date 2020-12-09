//
// This is only a SKELETON file for the 'Atbash Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ASCII_START = 'a'.charCodeAt();
const ASCII_END = 'z'.charCodeAt();
const CHUNK_SIZE = 5;

const transpose = char => String.fromCharCode(ASCII_START + ASCII_END - char.charCodeAt());

export const encode = string => string
  .toLowerCase()
  .replace(/\W/g, '')
  .replace(/[a-z]/g, transpose)
  .match(new RegExp(`.{1,${CHUNK_SIZE}}`, 'g'))
  .join(' ');

export const decode = string => string
  .replace(/\W/g, '')
  .replace(/[a-z]/g, transpose);
