/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
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
