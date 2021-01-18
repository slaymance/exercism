/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

/**
 * I've been learning Haskell and the book "Learn You a Haskell for Great Good!" has an
 * excellent chapter on a zippers which really made them click for me. You can read it here:
 * http://learnyouahaskell.com/zippers
 * I tried to model my implementation as much as possible after the examples in the chapter.
 * Of course, everything in Haskell is a function whereas here we're using a class. But the
 * methods here are still fundamentally the same.
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
