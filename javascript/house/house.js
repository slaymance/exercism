//
// This is only a SKELETON file for the 'House' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper functions for clarity
const range = (min, max) => [...Array(max + 1).keys()].slice(min);

const LINES = [
  ['house that Jack built.', 'lay in'],
  ['malt', 'ate'],
  ['rat', 'killed'],
  ['cat', 'worried'],
  ['dog', 'tossed'],
  ['cow with the crumpled horn', 'milked'],
  ['maiden all forlorn', 'kissed'],
  ['man all tattered and torn', 'married'],
  ['priest all shaven and shorn', 'woke'],
  ['rooster that crowed in the morn', 'kept'],
  ['farmer sowing his corn', 'belonged to'],
  ['horse and the hound and the horn', '']
];

const getObject = num => LINES[num][0];
const getAction = num => LINES[num][1];
const firstLine = num => [`This is the ${getObject(num)}`];
const subLine = num => `that ${getAction(num)} the ${getObject(num)}`

/**
 * This is essentially identical to my solution to food-chain. Refactored to not use a class.
 */
export const verse = num => firstLine(num - 1).concat(range(0, num - 2).reverse().map(subLine));
export const verses = (first, last) => range(first, last).flatMap(line => verse(line).concat(line === last ? [] : ''));