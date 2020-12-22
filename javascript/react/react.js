//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class Cell {
  #fn = () => null;
  #value = this.#fn();
  #dependency;
  #dependents = [];

  get value() {
    return this.setValue(this.#fn)
  }

  get dependency() {
    return this.#dependency;
  }

  setValue(value) {
    const newFn = typeof value === 'function' ? value : () => value;
    const newValue = newFn();
    const valueChanges = this.#value !== newValue;

    this.#value = newValue;
    this.#fn = newFn;

    if (valueChanges) this.#dependents.forEach(cell => cell.value);

    return this.#value;
  }

  addCallback(cb) {
    this.#dependents.push(cb.setDependency(this));
  }

  removeCallback(cb) {
    const cbIndex = this.#dependents.findIndex(dependent => dependent === cb) + 1 || this.#dependents.length + 1;
    this.#dependents = this.#dependents.slice(0, cbIndex - 1).concat(this.#dependents.slice(cbIndex));
  }

  setDependency(cell) {
    this.#dependency = cell;
    return this;
  }
}

export class InputCell extends Cell {
  constructor(value) {
    super();
    this.setValue(value);
  }
}

export class ComputeCell extends Cell {
  constructor(inputCells, fn) {
    super();
    inputCells.forEach(cell => cell.addCallback(this));
    this.setValue(() => fn(inputCells));
  }
}

export class CallbackCell extends Cell {
  #values = [];

  constructor(fn) {
    super();
    this.setValue(() => this.dependency && this.#values.push(fn(this.dependency)))
  }

  get values() {
    return this.#values;
  }
}
