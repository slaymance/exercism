// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

const ALPHABETICALS_LENGTH = 2;
const NUMERICALS_LENGTH = 3;
const FIRST_ASCII = 65;

let possibleNames;

export class Robot {
  #name

  constructor() {
    this.reset();
  }

  get name() {
    return this.#name;
  }

  reset() {
    this.#name = possibleNames.pop();
  }
}

const generateAlphaCombinations = (length, combo = '') => {
  if (combo.length === length) {
    return [combo];
  }

  const alphaCombos = [];
  for (let i = 0; i < 26; i++) {
    alphaCombos.push(...(generateAlphaCombinations(length, combo + String.fromCharCode(i + FIRST_ASCII))));
  }

  return alphaCombos;
}

const generateAllNames = () => {
  const names = [];
  generateAlphaCombinations(ALPHABETICALS_LENGTH).forEach(alphaCombo => {
    for (let num = 0; num < Math.pow(10, NUMERICALS_LENGTH); num++) {
      names.push(alphaCombo + (`${num}`).padStart(NUMERICALS_LENGTH, '0'));
    }
  })

  return names;
};

// Randomly shuffle list of all possible names using Fisher-Yates
const shuffleNames = (names) => {
  for (let i = names.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = names[i]
    names[i] = names[j]
    names[j] = temp
  }

  return names;
};

// An IIFE that makes all names eligible for selection
(Robot.releaseNames = () => {
  possibleNames = shuffleNames(generateAllNames());
})();
