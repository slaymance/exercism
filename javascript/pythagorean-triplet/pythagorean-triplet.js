/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

export class Triplet {
  constructor(...sides) {
    this.toArray = () => sides;
  }
}

function* getTriplets({ sum, maxFactor = sum / 2 | 0, minFactor = 3 }) {
  for (let a = minFactor; a < sum / 3 | 0; a++) {
    for (let b = a + 1; b < maxFactor; b++) {
      const c = Math.sqrt(a ** 2 + b ** 2);
      if ([
        Number.isInteger(c),
        c <= maxFactor,
        a + b + c === (sum ?? a + b + c)
      ].every(assertion => assertion)) yield new Triplet(a, b, c);
    }
  }
}

export const triplets = args => [...getTriplets(args)];
