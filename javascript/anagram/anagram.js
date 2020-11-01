//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * This solution takes about 80 seconds to get anagrams if given all words in the English language. I think it could be
 * made faster by creating an object or Map to count the occurrences of characters in each word and compare the
 * counts for each character.
 */
export const findAnagramsAlt = (word, anagrams) => {
  const lowerWord = word.toLowerCase();
  const sortedWord = [...lowerWord].sort().join('');
  return anagrams.filter(anagram => {
    const lowerAnagram = anagram.toLowerCase();
    return lowerAnagram !== lowerWord && [...lowerAnagram].sort().join('') === sortedWord;
  });
};
