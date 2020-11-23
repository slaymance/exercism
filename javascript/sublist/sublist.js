//
// This is only a SKELETON file for the 'Sublist' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

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
    return this.list.some((_, i) => areEqualLists(list, this.list.slice(i, i + list.length)));
  }

  compare(other) {
    if (areEqualLists(other.list, this.list)) return 'EQUAL';
    if (this.list.length > other.list.length && this.isSuperListOf(other)) return 'SUPERLIST';
    if (this.list.length < other.list.length && other.isSuperListOf(this)) return 'SUBLIST';
    return 'UNEQUAL';
  }
}
