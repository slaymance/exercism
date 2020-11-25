//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * I managed not to use any Array prototype methods or properties, but I'm not happy about it.
 * Everything is implemented in terms of foldl to demonstrate the power of reduce.
 */
export class List {
  #values;

  constructor(values = []) {
    this.#values = values;
  }

  get values() {
    return [...this.#values];
  }

  append(list) {
    return list.foldl((acc, value) => new List([...acc.values, value]), this);
  }

  concat(list) {
    return list.foldl((acc, value) => acc.append(value instanceof List ? value : new List([value])), this);
  }

  filter(pred) {
    return this.foldl((acc, value) => pred(value) ? acc.append(new List([value])) : acc);
  }

  map(fn) {
    return this.foldl((acc, value) => acc.append(new List([fn(value)])));
  }

  length() {
    return this.foldl(length => length + 1, 0);
  }

  foldl(fn, acc = new List()) {
    const [first, ...rest] = this.#values;
    return first === undefined ? acc : new List(rest).foldl(fn, fn(acc, first));
  }

  foldr() {
    return this.reverse().foldl(...arguments);
  }

  reverse() {
    return this.foldl((acc, value) => new List([value]).append(acc));
  }
}
