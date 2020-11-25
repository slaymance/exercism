//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// I use this to allow values of undefined in foldl
const NOT_SUPPLIED = 'NOT_SUPPLIED';

/**
 * I managed not to use any Array prototype methods or properties, but I'm not happy about it.
 * I've demonstrated the power of reduce by implementing every method using only foldl and append.
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
    if (first === NOT_SUPPLIED) return acc === NOT_SUPPLIED ? undefined : acc;
    return list.foldl(fn, acc === NOT_SUPPLIED ? first : fn(acc, first), new List(rest));
  }

  foldr(fn, acc) {
    return this.foldl(fn, acc, this.reverse());
  }

  reverse() {
    return this.foldl((acc, value) => new List([value]).append(acc), new List());
  }
}
