/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

export class Element {
  next = null;

  constructor(value) {
    this.value = value;
  }
}

export class List {
  #head = null;
  #length = 0;

  constructor(values = []) {
    values.forEach(value => this.add(new Element(value)));
  }

  /**
   * This makes any instance of List an iterable and makes the toArray method obsolete. If you want to cast the list to
   * an array, you just spread it into an array:
   * 
   * const list = new List([1, 2, 3]);
   * const array = [...list];
   * console.log(array) --> [3, 2, 1]
   */
  *[Symbol.iterator]() {
    for (let node = this.#head; node; node = node.next) {
      yield node.value;
    }
  }

  add(element) {
    [element.next, this.#head] = [this.#head, element];
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
