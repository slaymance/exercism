//
// This is only a SKELETON file for the 'React' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * Most everything is handled by this parent Cell class that I've created. Cell keeps
 * track of the following:
 *  - a compute function which determines the cell's value
 *  - the stored cell's value from the last time the compute function was run
 *  - a dependency cell if one is needed for a callback function
 *  - a list of dependent cells which react to a change in the cell's value
 * Whenever a cell's value is requested, it runs the compute function, sees if the
 * value has changed, updates dependents if so, and sets the new value.
 */
class Cell {
  #fn = () => null;
  #value = this.#fn();
  #dependency;
  #dependents = [];

  get value() {
    return this.setValue(this.#fn)
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

  get dependency() {
    return this.#dependency;
  }

  setDependency(cell) {
    this.#dependency = cell;
    return this;
  }

  addCallback(cb) {
    this.#dependents.push(cb.setDependency(this));
  }

  removeCallback(cb) {
    const cbIndex = this.#dependents.findIndex(dependent => dependent === cb) + 1 || this.#dependents.length + 1;
    this.#dependents = this.#dependents.slice(0, cbIndex - 1).concat(this.#dependents.slice(cbIndex));
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
