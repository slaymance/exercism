//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

// Helpers
const isNil = value => value == null;
class Null { } // This is for resetting a value after reading since null values can't be written

export class BufferFullError extends Error { }

export class BufferEmptyError extends Error { }

class CircularBuffer {
  #values;
  #readIndex = 0;
  #writeIndex = 0;

  constructor(size) {
    this.#values = Array(size);
  }

  #increment(index) {
    return (index + 1) % this.#values.length;
  }

  #incrementRead() {
    this.#readIndex = this.#increment(this.#readIndex);
  }

  #incrementWrite() {
    this.#writeIndex = this.#increment(this.#writeIndex);
  }

  get #isFull() {
    return !isNil(this.#values[this.#writeIndex]);
  }

  get #isEmpty() {
    return isNil(this.#values[this.#readIndex]);
  }

  #setValue(value, useReadIndex) {
    if (isNil(value)) return;
    this.#values[useReadIndex ? this.#readIndex : this.#writeIndex] = value instanceof Null ? null : value;
    useReadIndex ? this.#incrementRead() : this.#incrementWrite();
  }

  write(value) {
    if (this.#isFull) throw new BufferFullError();
    this.#setValue(value);
  }

  read() {
    if (this.#isEmpty) throw new BufferEmptyError();

    const value = this.#values[this.#readIndex];
    if (this.#isFull) this.#writeIndex = this.#readIndex;
    this.#setValue(new Null(), true);
    return value;
  }

  forceWrite(value) {
    this.#setValue(value, this.#isFull);
  }

  clear() {
    this.#values.fill(null);
  }
}

export default CircularBuffer;
