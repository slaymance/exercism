//
// This is only a SKELETON file for the 'Zipper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Zipper {
  static fromTree(tree, parent = null) {
    return tree ? new Zipper(tree, parent) : null;
  }

  #parent = null;

  #value = null;

  #left = null;

  #right = null;

  constructor(tree, parent) {
    this.#parent = parent;
    this.setValue(tree.value);
    this.setLeft(tree.left);
    this.setRight(tree.right);
  }

  get nodes() {
    return {
      value: this.#value,
      left: this.left()?.nodes ?? null,
      right: this.right()?.nodes ?? null
    };
  }

  toTree() {
    return this.up()?.toTree() ?? this.nodes;
  }

  value() {
    return this.#value;
  }

  left() {
    return this.#left;
  }

  right() {
    return this.#right;
  }

  up() {
    return this.#parent;
  }

  setValue(value) {
    this.#value = value;
    return this;
  }

  setLeft(node) {
    this.#left = Zipper.fromTree(node, this);
    return this;
  }

  setRight(node) {
    this.#right = Zipper.fromTree(node, this);
    return this;
  }
}
