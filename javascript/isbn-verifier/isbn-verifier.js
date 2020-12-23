/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

export const isValid = isbn => {
  const parsedISBN = /^[\d|X|-]+$/.test(isbn) ? isbn.match(/\d|X$/g) : [];
  return [
    digits => digits.length === 10,
    digits => digits.reduce((sum, digit, i) => sum + (digit === 'X' ? 10 : digit) * (10 - i), 0) % 11 === 0
  ].every(check => check(parsedISBN));
};