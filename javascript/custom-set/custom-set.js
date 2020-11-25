//
// This is only a SKELETON file for the 'Custom Set' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * I kind of feel like using an array and its methods to solve this is cheating, but eh.
 */
export class CustomSet {
  #set;

  constructor(values = []) {
    this.#set = values.reduce((set, value) => set.includes(value) ? set : set.concat(value), []);
  }

  get set() {
    return [...this.#set];
  }

  empty() {
    return this.#set.length === 0;
  }

  contains(value) {
    return this.#set.includes(value);
  }

  add(value) {
    !this.contains(value) && this.#set.push(value);
    return this;
  }

  subset(set) {
    return this.#set.every(value => set.contains(value));
  }

  disjoint(set) {
    return !this.#set.some(value => set.contains(value));
  }

  eql(set) {
    return this.subset(set) && set.subset(this);
  }

  union({ set }) {
    return new CustomSet(this.#set.concat(set));
  }

  intersection(set) {
    return new CustomSet(this.#set.filter(value => set.contains(value)));
  }

  difference(set) {
    return new CustomSet(this.#set.filter(value => !set.contains(value)));
  }
}
