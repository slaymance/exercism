//
// This is only a SKELETON file for the 'Phone Number' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const VALID_NUMBER_LENGTH = 10;
const COUNTRY_CODE_INDEX = 0;
const AREA_CODE_INDEX = 0;
const EXCHANGE_CODE_INDEX = 3;

export const clean = phoneNumber => {
  if (/[A-Za-z]/.test(phoneNumber)) throw new Error('Letters not permitted');
  if (/[^\(\)\-\.\+\d\s]/.test(phoneNumber)) throw new Error('Punctuations not permitted');

  const numbers = phoneNumber.match(/\d/g);
  if (numbers.length < VALID_NUMBER_LENGTH) throw new Error('Incorrect number of digits');
  if (numbers.length > 11) throw new Error('More than 11 digits');
  if (numbers.length === 11 && numbers[COUNTRY_CODE_INDEX] !== '1') throw new Error('11 digits must start with 1');

  const numbersLessCountry = numbers.slice(-VALID_NUMBER_LENGTH);
  if (numbersLessCountry[AREA_CODE_INDEX] === '0') throw new Error('Area code cannot start with zero');
  if (numbersLessCountry[AREA_CODE_INDEX] === '1') throw new Error('Area code cannot start with one');
  if (numbersLessCountry[EXCHANGE_CODE_INDEX] === '0') throw new Error('Exchange code cannot start with zero');
  if (numbersLessCountry[EXCHANGE_CODE_INDEX] === '1') throw new Error('Exchange code cannot start with one');

  return numbersLessCountry.join('')
};
