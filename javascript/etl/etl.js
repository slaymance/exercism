//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * I wanted to try my hand at creating an iterator with a generator. It's mostly unnecessary for this problem, but
 * could be useful if the data weren't being transformed and migrated and being used throughout an application. Plus 
 * it's just a language feature I've never used before.
 */
export const transform = scores => [...{
  ...scores,
  /**
   * This is the iterator that yields a pairing of a lower case letter and its score on each iteration.
   * e.g. { 'a': 1 }
   */
  *[Symbol.iterator]() {
    for (let [score, letters] of Object.entries(this)) {
      for (let letter of letters) {
        yield { [letter.toLowerCase()]: +score }; // This is the pairing
      }
    }
  }
}].reduce((acc, cur) => ({ ...acc, ...cur }));

/**
 * Here's a one-liner.
 */
export const transformAlt = scores => Object.entries(scores).reduce((acc, [score, letters]) => ({ ...acc, ...(letters.reduce((acc2, letter) => ({ ...acc2, [letter.toLowerCase()]: +score }), {})) }), {})