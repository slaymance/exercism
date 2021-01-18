/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

class Node {
  next = null;
  previous = null;

  constructor(value) {
    this.value = value;
  }

  resetPointers() {
    this.next = null;
    this.previous = null;
  }
}

export class LinkedList {
  #tail = null;
  #head = null;

  push(value) {
    const node = new Node(value);
    if (this.#tail) {
      node.previous = this.#tail;
      this.#tail.next = node;
    } else {
      this.#head = node;
    }
    this.#tail = node;
  }

  pop() {
    const popped = this.#tail;
    this.#tail = popped?.previous || null;
    if (this.#head === popped) {
      this.#head = null;
    } else if (this.#head?.next === popped) {
      this.#head.next = null;
    }
    popped?.resetPointers();
    return popped?.value;
  }

  unshift(value) {
    const node = new Node(value);
    if (this.#head) {
      node.next = this.#head;
      this.#head.previous = node;
    } else {
      this.#tail = node;
    }
    this.#head = node;
  }

  shift() {
    const shifted = this.#head;
    this.#head = shifted?.next || null;
    if (this.#tail === shifted) {
      this.#tail = null;
    } else if (this.#tail?.previous === shifted) {
      this.#tail.previous = null;
    }
    shifted?.resetPointers();
    return shifted?.value;
  }

  delete(value) {
    let currentNode = this.#head;
    while (currentNode && currentNode?.value !== value) {
      currentNode = currentNode.next;
    }
    if (currentNode === this.#head) {
      return this.shift();
    } else if (currentNode === this.#tail) {
      return this.pop();
    } else if (currentNode) {
      currentNode.previous.next = currentNode.next;
      currentNode.next.previous = currentNode.previous;
      return currentNode.value;
    }
  }

  get head() {
    return { ...this.#head };
  }

  get tail() {
    return { ...this.#tail };
  }

  count() {
    let count = 0;
    let currentNode = this.#head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }
}
