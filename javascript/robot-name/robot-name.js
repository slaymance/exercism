// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

const ALPHABETICALS_LENGTH = 2;
const NUMERICALS_LENGTH = 3;
const FIRST_ASCII = 'A'.charCodeAt(0);

export class Robot {
  #name

  constructor() {
    this.reset();
  }

  get name() {
    return this.#name;
  }

  reset() {
    this.#name = eligibleNames.pop();
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

// Generate an array of all possible names only once
const possibleNames = [];
generateAlphaCombinations(ALPHABETICALS_LENGTH).forEach(alphaCombo => {
  for (let num = 0; num < Math.pow(10, NUMERICALS_LENGTH); num++) {
    possibleNames.push(alphaCombo + (`${num}`).padStart(NUMERICALS_LENGTH, '0'));
  }
});

// Randomly shuffle list of all possible names using Fisher-Yates
const shuffleNames = ([...names]) => {
  for (let first = names.length - 1; first > 0; first--) {
    const second = Math.floor(Math.random() * first);
    [names[first], names[second]] = [names[second], names[first]];
  }

  return names;
};

let eligibleNames;

// An IIFE that makes all names eligible for selection
(Robot.releaseNames = () => {
  eligibleNames = shuffleNames(possibleNames);
})();
