// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.

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

let possibleNames;

const generateAllNames = () => {
  const names = [];
  for (let firstLetter = 65; firstLetter <= 90; firstLetter++) {
    for (let secondLetter = 65; secondLetter <= 90; secondLetter++) {
      for (let num = 0; num < 1000; num++) {
        names.push(`${String.fromCharCode(firstLetter)}${String.fromCharCode(secondLetter)}${num.toString().padStart(3, '0')}`);
      }
    }
  }

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
