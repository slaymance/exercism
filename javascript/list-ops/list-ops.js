//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// I use this to allow values of undefined in foldl
const NOT_SUPPLIED = 'NOT_SUPPLIED';

/**
 * I managed not to use any Array prototype methods or properties, but I'm not happy about it.
 */
export class List {
  #values;

  constructor(values = []) {
    this.#values = values;
  }

  get values() {
    return [...this.#values];
  }

  append({ values }) {
    return new List([...this.#values, ...values]);
  }

  flatten() {
    return this.foldl((acc, value) =>
      acc.append(value instanceof List ? value.flatten() : new List([value])), new List());
  }

  concat(list) {
    return this.append(list.flatten());
  }

  filter(pred) {
    return new List(this.foldl((acc, value) => pred(value) ? [...acc, value] : acc, []));
  }

  map(fn) {
    return new List(this.foldl((acc, value) => [...acc, fn(value)], []));
  }

  length() {
    return this.foldl(length => length + 1, 0);
  }

  foldl(fn, acc = NOT_SUPPLIED, list = this) {
    const [first = NOT_SUPPLIED, ...rest] = list.values;
    let mutableAcc = acc === NOT_SUPPLIED ? first : first === NOT_SUPPLIED ? acc : fn(acc, first);

    for (const value of rest) {
      mutableAcc = fn(mutableAcc, value);
    }

    return mutableAcc;
  }

  foldr(fn, acc) {
    return this.foldl(fn, acc, this.reverse());
  }

  reverse() {
    return this.foldl((acc, value) => new List([value]).append(acc), new List());
  }
}
