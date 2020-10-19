//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * I wanted to try my hand at creating an iterator with a generator. It's mostly unnecessary for this problem, but
 * could be useful if the data weren't being transformed and migrated and being used throughout an application. Plus 
 * it's just a language feature I've never used before.
 * 
 * Object.fromEntries requires Node version >12.0.0.
 */
export const transform = scores => Object.fromEntries([...{
  ...scores,
  /**
   * This is the iterator that yields a pairing of a lower case letter and its score on each iteration.
   * e.g. ['a', 1]
   */
  *[Symbol.iterator]() {
    for (let [score, letters] of Object.entries(this)) {
      for (let letter of letters) {
        yield [letter.toLowerCase(), +score]; // This is the pairing
      }
    }
  }
}]);

/**
 * Here's a one-liner.
 */
export const transformAlt = scores => Object.fromEntries(Object.entries(scores).flatMap(([score, letters]) => letters.map(letter => [letter.toLowerCase(), +score])));
