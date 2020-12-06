//
// This is only a SKELETON file for the 'Sieve' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const primes = max => [...Array(max + 1)].reduce((primes, _, n, sieve) => {
  if (n < 2 || sieve[n] === 0) return primes;

  for (let i = 2; i < sieve.length; i++) {
    const multiple = n * i;
    if (multiple > sieve.length) break;
    sieve[multiple] = 0;
  }

  return primes.concat(n);
}, []);
