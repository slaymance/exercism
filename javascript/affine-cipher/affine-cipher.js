const ASCII_START = 'a'.charCodeAt();
const NUMBER_OF_LETTERS = 26;
const CHUNK_SIZE = 5;

const areCoprime = (a, b) => a > 2 && b > 2 &&
  [...Array(Math.min(a, b) + 1).keys()].slice(2).every(factor => a % factor || b % factor);

const chunkString = (size => string => string.length ?
  [string.slice(0, size), ...chunkString(string.slice(size), size)] :
  [])(CHUNK_SIZE);

const findMMI = (a, m) => {
  if (!areCoprime(a, m)) throw new Error('a and m must be coprime.');

  for (let ax = m + 1; ; ax += m) {
    if (ax % a === 0) return ax / a;
  }
};

const transpose = encryptFn => char => String.fromCharCode(encryptFn(char) % NUMBER_OF_LETTERS + ASCII_START);

export const encode = (phrase, { a, b }) => {
  if (!areCoprime(a, NUMBER_OF_LETTERS)) throw new Error('a and m must be coprime.');

  return chunkString(phrase.toLowerCase().replace(/\W/g, ''))
    .map(chunk => chunk.replace(
      /[a-z]/g,
      transpose(char => a * (char.charCodeAt() - ASCII_START) + b)))
    .join(' ');
};

export const decode = (phrase, { a, b }) => {
  const mmi = findMMI(a, NUMBER_OF_LETTERS);

  return phrase.replace(/\W/g, '').replace(
    /[a-z]/g,
    transpose(char => mmi * (char.charCodeAt() - ASCII_START - b) % NUMBER_OF_LETTERS + NUMBER_OF_LETTERS)
  );
};
