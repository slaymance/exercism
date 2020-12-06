//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const COMPOSITE = 'COMPOSITE';

export const primes = max => [...Array(max + 1)].reduce((primeNums, _, num, sieve) => {
  if (num < 2 || sieve[num] === COMPOSITE) return primeNums;

  for (let multiple = num * 2; multiple <= sieve.length; multiple += num) {
    sieve[multiple] = COMPOSITE;
  }

  return primeNums.concat(num);
}, []);
