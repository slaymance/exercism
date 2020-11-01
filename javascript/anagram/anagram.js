//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper function for clarity
const sortChars = word => [...word].sort().join('');

/**
 * According to Jest, this solution finds all anagrams in the English language in about 150 ms. I'm sure it could be
 * made faster since I'm using .sort() and .join() here.
 */
export const findAnagrams = (word, anagrams) => {
  const lowerWord = word.toLowerCase();
  const sortedWord = sortChars(lowerWord);
  return anagrams.filter(anagram => {
    const lowerAnagram = anagram.toLowerCase();
    return lowerAnagram !== lowerWord && sortChars(lowerAnagram) === sortedWord;
  });
};
