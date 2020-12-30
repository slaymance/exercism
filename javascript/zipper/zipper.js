/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

/**
 * {
 *  value: 1,
 *  left: {
 *    value: 2,
 *    left: null,
 *    right: {
 *      value: 3,
 *      left: null,
 *      right: null
 *    }
 *  },
 *  right: {
 *    value: 4,
 *    left: null,
 *    right: null
 *  }
 * }
 */

/**
 * left: Zipper {
 *  tree: {
 *    value: 2,
 *    left: null,
 *    right: {
 *      value: 3,
 *      left: null,
 *      right: null
 *    }
 *  },
 *  breadcrumbs: [Zipper {
 *    value: 1,
 *    left: null,
 *    right: {
 *      value: 4,
 *      left: null,
 *      right: null
 *    }
 *  }]
 * }
 * 
 * right: Zipper {
 *  tree: {
 *    value: 3,
 *    left: null,
 *    right: null
 *  },
 *  breadcrumbs: [Zipper {
 *    value: 1,
 *    left: null,
 *    right: {
 *      value: 4,
 *      left: null,
 *      right: null
 *    }
 *  }, Zipper {
 *    value: 2,
 *    left: null,
 *    right: null
 *  }]
 * }
 */

export class Zipper {
  static fromTree(tree, breadcrumbs) {
    return tree ? new Zipper(tree, breadcrumbs) : null;
  }

  constructor(tree, breadcrumbs = []) {
    this.tree = tree;
    this.breadcrumbs = breadcrumbs;
  }

  toTree() {
    return this.up()?.toTree() ?? this.tree;
  }

  value() {
    return this.tree.value;
  }

  left() {
    return Zipper.fromTree(
      this.tree.left,
      [...this.breadcrumbs, Zipper.fromTree({ value: this.value(), right: this.tree.right }, this.breadcrumbs)]
    );
  }

  right() {
    return Zipper.fromTree(
      this.tree.right,
      [...this.breadcrumbs, Zipper.fromTree({ value: this.value(), left: this.tree.left }, this.breadcrumbs)]
    );
  }

  up() {
    if (!this.breadcrumbs.length) return null;

    const parent = this.breadcrumbs.pop();
    return Zipper.fromTree({
      value: parent.value(),
      left: 'left' in parent.tree ? parent.tree.left : this.tree,
      right: 'right' in parent.tree ? parent.tree.right : this.tree
    }, this.breadcrumbs);
  }

  setValue(value) {
    return Zipper.fromTree({
      value,
      left: this.tree.left,
      right: this.tree.right
    }, this.breadcrumbs);
  }

  setLeft(tree) {
    return Zipper.fromTree({
      value: this.value(),
      left: tree,
      right: this.tree.right
    }, this.breadcrumbs);
  }

  setRight(tree) {
    return Zipper.fromTree({
      value: this.value(),
      left: this.tree.left,
      right: tree
    }, this.breadcrumbs);
  }
}

export class ZipperB {
  static fromTree(tree, parent = null) {
    return tree ? new ZipperB(tree, parent) : null;
  }

  constructor(tree, parent = null) {
    this.tree = tree;
    this.parent = parent;
  }

  get branches() {
    return {
      value: this.tree.value,
      left: this.left()?.branches ?? null,
      right: this.right()?.branches ?? null
    };
  }

  toTree() {
    return this.up()?.toTree() ?? this.branches;
  }

  value() {
    return this.tree.value;
  }

  left() {
    return ZipperB.fromTree(this.tree.left, this);
  }

  right() {
    return ZipperB.fromTree(this.tree.right, this);
  }

  up() {
    return ZipperB.fromTree(this.parent?.tree, this.parent?.parent);
  }

  setValue(value) {
    this.tree.value = value;
    return ZipperB.fromTree(this.toTree());
  }
}

export class ZipperA {
  static fromTree(tree, parent = null) {
    return tree ? new ZipperA(tree, parent) : null;
  }

  #parent;
  #value;
  #left;
  #right;

  constructor({ value = null, left = null, right = null }, parent = null) {
    this.#parent = parent;
    this.#value = value;
    this.#left = ZipperA.fromTree(left, this);
    this.#right = ZipperA.fromTree(right, this);
  }

  get parent() {
    return this.#parent;
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
    return ZipperA.fromTree({
      value: this.#parent?.value,
      left: this.#parent?.left,
      right: this.#parent?.right
    }, this.#parent?.parent);
  }

  setValue(value) {
    this.#value = value;
    return ZipperA.fromTree(this.toTree(), this.#parent);
  }

  setLeft(node) {
    this.#left = ZipperA.fromTree(node, this);
    return ZipperA.fromTree(this.toTree(), this.#parent);
  }

  setRight(node) {
    this.#right = ZipperA.fromTree(node, this);
    return ZipperA.fromTree(this.toTree(), this.#parent);
  }
}
