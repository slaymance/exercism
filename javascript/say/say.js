//
// This is only a SKELETON file for the 'Say' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const TRILLION = 1000000000000;

const DIGITS = [
  'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
];
const TEENS = [
  'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
];
const TENS = [
  'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
];
const MAGNITUDES = [
  'thousand', 'million', 'billion'
];

const getHundreds = ([one, ten, hundred]) => hundred ? `${DIGITS[hundred - 1]} hundred${ten || one ? ' ' : ''}` : '';
const getTens = ([one, ten]) => ten > 1 ? `${TENS[ten - 2]}${one ? '-' : ''}` : '';
const getTeenOrOnes = ([one, ten]) => ten === 1 ? TEENS[one] : DIGITS[one - 1] || '';
const getMagnitude = (nums, i) => i && !nums.every(num => num === 0) ? ' ' + MAGNITUDES[i - 1] : '';

const produceNum = (...args) => [
  getHundreds,
  getTens,
  getTeenOrOnes,
  getMagnitude
].map(fn => fn(...args)).join('') || [];

const reverseAndSlice = num => {
  const digits = `${num}`.split('').map(Number).reverse();
  return Array.from(Array(Math.ceil(digits.length / 3)), (_, i) => digits.slice(i * 3, i * 3 + 3));
};

export const inEnglish = num => {
  if (num < 0 || num >= TRILLION) throw new Error('Number must be between 0 and 999,999,999,999.');
  if (num === 0) return 'zero';

  return reverseAndSlice(num)
    .flatMap(produceNum)
    .reverse()
    .join(' ');
};
