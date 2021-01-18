/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const { floor, sqrt } = Math;

const isFactor = n => factor => n % factor === 0;
const rangeSqrt = (min, n) => [...Array(floor(sqrt(n)) + 1).keys()].slice(min);
const factors = n => rangeSqrt(2, n).flatMap(num => isFactor(n)(num) ? [...new Set([num, n / num])] : []);

const isPrime = n => n > 1 && !rangeSqrt(2, n).some(isFactor(n));

/**
 * I took a shortcut here since we know n is prime. For this function to be a true primitive root check, we would need
 * to get the factors of the result of passing n into Euler's totient function.
 * 
 * https://en.wikipedia.org/wiki/Primitive_root_modulo_n#Definition
 */
const isPrimitiveRoot = n => root => n > 1 && factors(n - 1).every(factor => root ** factor % n !== 1);


export class DiffieHellman {
  #p;
  #g;

  constructor(p, g) {
    if (!isPrime(p)) throw new Error('p must be prime.');
    if (!isPrimitiveRoot(p)(g)) throw new Error('g must be a primitive root of p.');

    [this.#p, this.#g] = [p, g];
  }

  getPublicKey(a) {
    if (a <= 1 || a >= this.#p) throw new Error('Private key must be between 1 and p.');

    return this.#g ** a % this.#p;
  }

  getSecret(B, a) {
    return B ** a % this.#p;
  }
}
