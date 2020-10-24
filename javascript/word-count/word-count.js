//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * 
 */
export const countWords = phrase => phrase
  .toLowerCase()
  .match(/\w+(\'[a-z]+)?/g)
  .reduce((counts, word) => ({ ...counts, [word]: ~~counts[word] + 1 }), {});
