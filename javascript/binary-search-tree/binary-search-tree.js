//
// This is only a SKELETON file for the 'Binary Search Tree' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BinarySearchTree {
  #data;
  #left;
  #right;

  constructor(value) {
    this.#data = value;
  }

  get data() {
    return this.#data;
  }
  get right() {
    return this.#right;
  }

  set right(value) {
    this.#right = new BinarySearchTree(value);
  }

  get left() {
    return this.#left;
  }

  set left(value) {
    this.#left = new BinarySearchTree(value);
  }

  insert(value) {
    const branch = value <= this.data ? 'left' : 'right';
    this[branch] ? this[branch].insert(value) : this[branch] = value;
  }

  each(iterator) {
    this.left?.each(iterator);
    iterator(this.data);
    this.right?.each(iterator);
  }
}
