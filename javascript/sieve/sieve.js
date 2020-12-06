//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = max => [...Array(max + 1)].reduce((primeNums, _, i, sieve) => {
  if (i < 2 || sieve[i] === 0) return primeNums;

  for (let multiple = i * 2; multiple <= sieve.length; multiple += i) {
    sieve[multiple] = 0;
  }

  return primeNums.concat(i);
}, []);
