//
// This is only a SKELETON file for the 'ETL' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * This is taken from Lodash's source code.
 * https://lodash.com/docs/4.17.15#fromPairs
 */
function fromPairs(pairs) {
  var index = -1,
    length = pairs == null ? 0 : pairs.length,
    result = {};

  while (++index < length) {
    var pair = pairs[index];
    result[pair[0]] = pair[1];
  }
  return result;
}

/**
 * I wanted to try my hand at creating an iterator with a generator. It's mostly unnecessary for this problem, but
 * could be useful if the data weren't being transformed and migrated and being used throughout an application. Plus 
 * it's just a language feature I've never used before.
 */
export const transform = scores => fromPairs([...{
  ...scores,
  /**
   * This is the iterator that yields a pairing of a lower case letter and its score on each iteration.
   * e.g. ['a', 1]
   */
  *[Symbol.iterator]() {
    const scores = Object.keys(this);
    const letters = Object.values(this);

    let scoreIndex = -1;
    let letterIndex = -1;

    while (++scoreIndex < scores.length) {
      while (++letterIndex < letters[scoreIndex].length) {
        yield [letters[scoreIndex][letterIndex].toLowerCase(), Number(scores[scoreIndex])]; // This is the pairing
      }
      letterIndex = -1;
    }
  }
}]);

