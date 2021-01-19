/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

/**
 * When recursing the right side of an array, be sure to add the midpoint to offset the change in indeces.
 */
export default class BinarySearch {
  public array: number[] | undefined;

  constructor(array: number[]) {
    if (array.every((num, i, src) => num >= (src[i - 1] ?? 0))) {
      this.array = array;
    }
  }

  indexOf(value: number, array = this.array): number {
    if (!array?.length) return -1;

    const midpoint = (array.length / 2) | 0;

    if (array[midpoint] > value) {
      return this.indexOf(value, array.slice(0, midpoint));
    }

    if (array[midpoint] < value) {
      const found = this.indexOf(value, array.slice(midpoint + 1));
      return found === -1 ? -1 : found + midpoint + 1;
    }

    return midpoint;
  }
}
