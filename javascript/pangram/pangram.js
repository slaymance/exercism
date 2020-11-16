//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const SIZE_OF_ENGLISH_ALPHABET = 26;

export const isPangram = letters => letters.replace(/([a-z])(?=.*\1)|[^a-z]/gi, '').length === SIZE_OF_ENGLISH_ALPHABET;
