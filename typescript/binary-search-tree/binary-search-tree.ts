/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

export default class BinarySearchTree {
  private leftBranch: BinarySearchTree | null = null;
  private rightBranch: BinarySearchTree | null = null;
  data: number | undefined;

  private insertLeft(value: number): void {
    this.leftBranch
      ? this.leftBranch.insert(value)
      : (this.leftBranch = new BinarySearchTree(value));
  }

  private insertRight(value: number): void {
    this.rightBranch
      ? this.rightBranch.insert(value)
      : (this.rightBranch = new BinarySearchTree(value));
  }

  constructor(value?: number) {
    this.data = value;
  }

  get left(): BinarySearchTree {
    return this.leftBranch ?? new BinarySearchTree();
  }

  get right(): BinarySearchTree {
    return this.rightBranch ?? new BinarySearchTree();
  }

  insert(value: number): void {
    if (this.data === undefined) return;
    this.data >= value ? this.insertLeft(value) : this.insertRight(value);
  }

  each(iterator: (value: number) => number): void {
    if (this.data === undefined) return;
    this.leftBranch?.each(iterator);
    iterator(this.data);
    this.rightBranch?.each(iterator);
  }
}
