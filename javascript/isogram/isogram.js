//
// This is only a SKELETON file for the 'Isogram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * .test returns a boolean if the given string matches the pattern laid out in the regular expression
 * ([a-z]) captures a letter in the string
 * .* indicates the captured letter can be followed by any number of characters (or nothing)
 * \1 is the same letter captured by ([a-z]), so it will only match strings where a letter occurs more than once
 * i makes the regex pattern case-insensitive
 * ! negates the result of .test since a matching pattern will return 'true'
 */
export const isIsogram = (word = '') => !/([a-z]).*\1/i.test(word);
