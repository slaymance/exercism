//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helper function
const isNil = value => value == null;

class CircularBuffer {
  #size;
  #values = [];

  constructor(size) {
    this.#size = size;
  }

  write(value) {
    if (this.#values.length === this.#size) throw new BufferFullError();
    !isNil(value) && this.#values.push(value);
  }

  read() {
    if (!this.#values.length) throw new BufferEmptyError();
    return this.#values.shift();
  }

  forceWrite(value) {
    try {
      this.write(value);
    } catch {
      this.#values = [...this.#values.slice(1), value];
    }
  }

  clear() {
    this.#values = [];
  }
}

export default CircularBuffer;

export class BufferFullError extends Error { }

export class BufferEmptyError extends Error { }
