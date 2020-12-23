/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

// Helper function
const range = (min, max) => [...Array(max).keys()].slice(min);

const GIFTS = [
  'twelve Drummers Drumming',
  'eleven Pipers Piping',
  'ten Lords-a-Leaping',
  'nine Ladies Dancing',
  'eight Maids-a-Milking',
  'seven Swans-a-Swimming',
  'six Geese-a-Laying',
  'five Gold Rings',
  'four Calling Birds',
  'three French Hens',
  'two Turtle Doves',
];

const DAYS = [
  'first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eighth', 'ninth', 'tenth', 'eleventh', 'twelfth'
];

const produceLine = line => `On the ${DAYS[line]} day of Christmas my true love gave to me: ${  GIFTS
  .slice(GIFTS.length - line)
  .concat(`${line === 0 ? '' : 'and '}a Partridge in a Pear Tree.`)
  .join(', ')  }\n`;

export const recite = (first, last) => range(first - 1, last || first)
  .map(produceLine)
  .join('\n');
