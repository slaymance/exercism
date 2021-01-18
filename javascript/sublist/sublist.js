/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

// Helper function
const areEqualLists = (list1, list2) => list1.length === list2.length && list1.every((el, i) => el === list2[i]);

export class List {
  #list;

  constructor(list = []) {
    this.#list = list;
  }

  get list() {
    return [...this.#list];
  }

  isSuperListOf({ list }) {
    return this.list.length > list.length && this.list.some((_, i) =>
      areEqualLists(list, this.list.slice(i, i + list.length)));
  }

  compare(other) {
    if (areEqualLists(other.list, this.list)) return 'EQUAL';
    if (this.isSuperListOf(other)) return 'SUPERLIST';
    if (other.isSuperListOf(this)) return 'SUBLIST';
    return 'UNEQUAL';
  }
}
