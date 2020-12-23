/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const COMPOSITE = 'COMPOSITE';

export const primes = max => [...Array(max + 1)].reduce((primeNums, _, num, sieve) => {
  if (num < 2 || sieve[num] === COMPOSITE) return primeNums;

  for (let multiple = num * 2; multiple <= sieve.length; multiple += num) {
    sieve[multiple] = COMPOSITE;
  }

  return primeNums.concat(num);
}, []);
