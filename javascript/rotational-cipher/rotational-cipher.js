//
// This is only a SKELETON file for the 'Rotational Cipher' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const UPPER_ASCII_START = 65;
const LOWER_ASCII_START = 97;
const NUMBER_OF_LETTERS = 26;

const transpose = shift => char => {
  const asciiCode = char.charCodeAt();
  const asciiStart = asciiCode < LOWER_ASCII_START ? UPPER_ASCII_START : LOWER_ASCII_START;
  return String.fromCharCode((asciiCode - asciiStart + shift) % NUMBER_OF_LETTERS + asciiStart);
};

export const rotate = (string, shift) => string.replace(/[a-z]/gi, transpose(shift));
