//
// This is only a SKELETON file for the 'Anagram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * According to Jest, this solution finds all anagrams in the English language in about 150 ms. I'm sure it could be
 * made faster since I'm using .sort() and .join() here.
 */
export const findAnagrams = (word, anagrams) => {
  const lowerWord = word.toLowerCase();
  const sortedWord = [...lowerWord].sort().join('');
  return anagrams.filter(anagram => {
    const lowerAnagram = anagram.toLowerCase();
    return lowerAnagram !== lowerWord && [...lowerAnagram].sort().join('') === sortedWord;
  });
};
