/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

// Helper function for clarity
const sortChars = (word: string): string => [...word].sort().join('');

/**
 * According to Jest, this solution finds all anagrams in the English language in about 150 ms. I'm sure it could be
 * made faster since I'm using .sort() and .join() here.
 */
const findAnagrams = (word: string, anagrams: string[]): string[] => {
  const lowerWord = word.toLowerCase();
  const sortedWord = sortChars(lowerWord);
  return anagrams.filter((anagram) => {
    const lowerAnagram = anagram.toLowerCase();
    return lowerAnagram !== lowerWord && sortChars(lowerAnagram) === sortedWord;
  });
};

/**
 * The below code is only used to make the tests pass.
 */
export default class Anagrams {
  word: string;

  constructor(word: string) {
    this.word = word;
  }

  matches(...anagrams: string[]): string[] {
    return findAnagrams(this.word, anagrams);
  }
}
