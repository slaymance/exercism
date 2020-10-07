//
// This is only a SKELETON file for the 'List Ops' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class List {
  constructor(items = []) {
    this.values = items;
  }

  push(value) {
    this.values = [...this.values, value];
  }

  append({
    values
  }) {
    for (let value of values) {
      this.push(value);
    }

    return this;
  }

  concat({
    values
  }) {
    for (let value of values) {
      if (value instanceof List) {
        this.concat(value);
      } else {
        this.push(value);
      }
    }

    return this;
  }

  filter(pred) {
    const filteredList = new List();
    for (let value of this.values) {
      if (pred(value)) {
        filteredList.push(value);
      }
    }

    return filteredList;
  }

  map(fn) {
    const mappedList = new List();
    for (let value of this.values) {
      mappedList.push(fn(value));
    }

    return mappedList;
  }

  length() {
    let i = 0;
    for (let value of this.values) {
      i++;
    }

    return i;
  }

  foldl(fn, acc) {
    for (let value of this.values) {
      acc = fn(acc, value);
    }

    return acc;
  }

  foldr(fn, acc) {
    const foldrList = new List();
    for (let value of this.reverse().values) {
      acc = fn(acc, value);
    }

    return acc;
  }

  reverse() {
    const reversedList = new List();
    for (let i = this.length() - 1; i >= 0; i--) {
      reversedList.push(this.values[i]);
    }

    return reversedList;
  }
}
