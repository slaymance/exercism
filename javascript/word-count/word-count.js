//
// This is only a SKELETON file for the 'Word Count' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Little shakey on the regex but I'll try to explain:
 * \w+ gets all the word characters together (an easy way to deal with all the words that aren't contractions)
 * \' looks for apostrophes that follow word characters (so eliminates beginning single quotes)
 * \w+ makes sure the apostrophe has any number of word characters that follow it (so this technically works for
 * words like y'all)
 * ? says the stuff in parentheses is optional as not all words are contractions
 * g matches the whole string
 * 
 * I kind of made up the contraction part so it may not be fool-proof.
 */
export const countWords = phrase => phrase
  .toLowerCase()
  .match(/\w+(\'\w+)?/g)
  .reduce((counts, word) => ({ ...counts, [word]: ~~counts[word] + 1 }), {});
