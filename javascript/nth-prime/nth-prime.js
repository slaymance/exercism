/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const { floor, sqrt } = Math;

const isPrime = n => n > 1 && [...Array(floor(sqrt(n)) + 1).keys()]
  .slice(2)
  .every(factor => n % factor);

/**
 * I woke up this morning thinking, "I haven't written a confusing for loop in quite a while."
 */
export const prime = target => {
  if (target <= 0) throw new Error('there is no zeroth prime');
  let num = 2;
  for (let count = 1; count !== target; num += num === 2 ? 1 : 2, isPrime(num) && count++) { }
  return num;
};
