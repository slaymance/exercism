//
// This is only a SKELETON file for the 'Simple Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Element {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class List {
  #head = null;
  #length = 0;

  constructor(values = []) {
    values.forEach(this.add.bind(this));
  }

  *[Symbol.iterator]() {
    for (let node = this.#head; node; node = node.next) {
      yield node.value;
    }
  }

  add(value) {
    const element = value instanceof Element ? value : new Element(value);
    element.next = this.#head;
    this.#head = element;
    this.#length++;
  }

  get length() {
    return this.#length;
  }

  get head() {
    return this.#head;
  }

  toArray() {
    return [...this];
  }

  reverse() {
    return new List(this.toArray());
  }
}

