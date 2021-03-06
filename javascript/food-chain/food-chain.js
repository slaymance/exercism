/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

// Helper functions for clarity
const range = (min, max) => [...Array(max + 1).keys()].slice(min);

const WRIGGLED = 'wriggled and jiggled and tickled inside her';
const ANIMALS = [
  ['fly', 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n'],
  ['spider', `It ${WRIGGLED}.\n`],
  ['bird', 'How absurd to swallow a bird!\n'],
  ['cat', 'Imagine that, to swallow a cat!\n'],
  ['dog', 'What a hog, to swallow a dog!\n'],
  ['goat', 'Just opened her throat and swallowed a goat!\n'],
  ['cow', 'I don\'t know how she swallowed a cow!\n'],
  ['horse', 'She\'s dead, of course!\n']
];

const getAnimal = num => ANIMALS[num][0];
const getAnimalLine = num => ANIMALS[num][1];
const know = num => `I know an old lady who swallowed a ${getAnimal(num)}.\n`;
const swallow = num => `She swallowed the ${getAnimal(num + 1)} to catch the ${getAnimal(num) +
  (getAnimal(num) === 'spider' ? ` that ${WRIGGLED}` : '')}.\n`;

/**
 * I refactored the code and the tests to use functions instead of a class. Since we're not managing state within the
 * class, functions are sufficient.
 */
const verse = num => {
  const firstLines = know(num - 1) + getAnimalLine(num - 1);
  if (['fly', 'horse'].includes(getAnimal(num - 1))) return firstLines;

  return range(0, num - 2).reduceRight((verse, line) => verse + swallow(line), firstLines) + getAnimalLine(0);
};

const verses = (first, last) => range(first, last).reduce((song, verseNum) => `${song + verse(verseNum)}\n`, '');

/**
 * The below code is only used to make the tests pass.
 */
export class Song {
  verse(...args) {
    return verse(...args);
  }

  verses(...args) {
    return verses(...args);
  }
}