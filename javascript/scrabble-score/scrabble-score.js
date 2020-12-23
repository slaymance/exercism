/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

/**
 * This is acceptable, right? I think it's acceptable.
 */
import { transform } from '../etl/etl';

const SCORES = transform({
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
});

export const score = word => [...word.toLowerCase()].reduce((score, letter) => SCORES[letter] + score, 0);

/**
 * The problem talks about implementing double/triple letters/words but the tests aren't set up in a way to actually
 * know which letters or words should receive bonuses. I'd recommend a data structure that looks like the following:
 * {
 *  word: [
 *    { letter: 'Q', multiplier: 1 },
 *    { letter: 'u', multiplier: 1 },
 *    { letter: 'i', multiplier: 1 },
 *    { letter: 'r', multiplier: 3 },
 *    { letter: 'k', multiplier: 1 },
 *    { letter: 'y', multiplier: 2 },
 *  ],
 *  multiplier: 2
 * }
 * 
 * I'd implement the solution as thus:
 */

export const scoreBonuses = play => play.multiplier * play.word
  .reduce((score, { letter, multiplier }) => multiplier * SCORES[letter.toLowerCase()] + score, 0);
