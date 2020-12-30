/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const gcd = (a, b) => b ? gcd(b, a % b) : a;

class Bucket {
  volume = 0;

  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
  }
}

export class TwoBucket {
  constructor(one, two, goal, start) {
    const bucketOne = new Bucket('one', one);
    const bucketTwo = new Bucket('two', two);
    [this.start, this.other] = start === 'one' ? [bucketOne, bucketTwo] : [bucketTwo, bucketOne];
    this.goal = goal;
  }

  transfer() {
    const transfer = Math.min(this.other.volume + this.start.volume, this.other.capacity) - this.other.volume;
    this.start.volume -= transfer;
    this.other.volume += transfer;
  }

  solve() {
    if ([this.start, this.other].some(({ volume }) => volume === this.goal)) return 0;
    // Fill our start bucket
    if (!this.start.volume) this.start.volume = this.start.capacity;
    // Fill the other bucket if it's equal to our goal
    else if (this.other.capacity === this.goal) this.other.volume = this.other.capacity;
    // Empty other bucket if full
    else if (this.other.volume === this.other.capacity) this.other.volume = 0;
    // Transfer between buckets
    else this.transfer();
    return 1 + this.solve();
  }

  moves() {
    if (this.goal % gcd(this.start.capacity, this.other.capacity)) throw new Error('Not possible');
    return this.solve();
  }

  get goalBucket() {
    return [this.start, this.other].find(({ volume }) => volume === this.goal).name;
  }

  get otherBucket() {
    return [this.start, this.other].find(({ volume }) => volume !== this.goal).volume;
  }
}
