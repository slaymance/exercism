//
// This is only a SKELETON file for the 'Food Chain' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper functions for clarity
const range = (min, max) => [...Array(max + 1).keys()].slice(min, max + 1);

export class Song {
  static #animals = [
    ['fly', 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'],
    ['spider', 'It wriggled and jiggled and tickled inside her.\n'],
    ['bird', 'How absurd to swallow a bird!\n'],
    ['cat', 'Imagine that, to swallow a cat!\n'],
    ['dog', 'What a hog, to swallow a dog!\n'],
    ['goat', 'Just opened her throat and swallowed a goat!\n'],
    ['cow', 'I don\'t know how she swallowed a cow!\n'],
    ['horse', 'She\'s dead, of course!\n']
  ];

  #know(animal) {
    return `I know an old lady who swallowed a ${animal}.\n`;
  }

  #swallow(swallowed, caught) {
    return `She swallowed the ${swallowed} to catch the ${caught}${caught === 'spider' ?
      ' that wriggled and jiggled and tickled inside her' : ''}.\n`
  }

  #getAnimal(num) {
    return Song.#animals[num][0];
  }

  #getAnimalLine(num) {
    return Song.#animals[num][1];
  }

  verse(num) {
    const firstLines = this.#know(this.#getAnimal(num - 1)) + this.#getAnimalLine(num - 1);
    if (num === 1 || num === 8) return firstLines;

    return range(0, num - 2).reduceRight((verse, line) =>
      verse + this.#swallow(this.#getAnimal(line + 1), this.#getAnimal(line)), firstLines) + this.#getAnimalLine(0);
  }

  verses(first, last) {
    return range(first, last).reduce((song, verse) => song + this.verse(verse) + '\n', '');
  }
}
