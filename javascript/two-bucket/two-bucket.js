/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

export class TwoBucket {
  #goal;
  #start;
  #fillCap;
  #holdCap;

  constructor(one, two, goal, start) {
    this.#goal = goal;
    this.#start = start;
    [this.#fillCap, this.#holdCap] = start === 'one' ? [one, two] : [two, one];
  }

  #move(liters, other) {
    if (!liters) return [this.#fillCap, other];
    if (other === this.#holdCap) return [liters, 0];
    const transfer = Math.min(other + liters, this.#holdCap) - other;
    return [liters - transfer, other + transfer];
  }

  moves(liters = 0, other = 0) {
    if (liters === this.#goal) return 0;
    return 1 + this.moves(...this.#move(liters, other));
  }

  get goalBucket() {
    return this.#start;
  }

  get otherBucket() {
    return this.#holdCap;
  }
}
