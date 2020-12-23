/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

// Helper functions for clarity
const isNumber = n => typeof n == 'number' && !isNaN(n) && isFinite(n);
const identity = (...args) => args;

/**
 * Can you imagine getting this question in an interview? My word...
 * 
 * Most of the work remaining is with the #defineOperation method and the operations themselves. Right now, a user
 * can't define an operation which uses more than one arithmetic operation or multiple different stack operations.
 * Maybe I'll come back to finish this one day.
 */
export class Forth {
  static validate(num) {
    if (!isNumber(num)) throw new Error('Stack empty');
    return num;
  }

  static #standardOperations = {
    '+': (num1, num2) => Forth.validate(num1) + Forth.validate(num2),
    '-': (num1, num2) => Forth.validate(num1) - Forth.validate(num2),
    '*': (num1, num2) => Forth.validate(num1) * Forth.validate(num2),
    '/': (num1, num2) => {
      if (num2 === 0) throw new Error('Division by zero');
      return Forth.validate(num1) / Forth.validate(num2) | 0;
    },
    dup: (...nums) => nums.concat(Forth.validate(nums[nums.length - 1])),
    drop: (...nums) => isNumber(Forth.validate(nums.pop())) && nums,
    swap: (num1, num2) => [Forth.validate(num2), Forth.validate(num1)],
    over: (...nums) => {
      const [num1, num2] = nums.splice(-2, 2);
      return [...nums, Forth.validate(num1), Forth.validate(num2), num1];
    },
  }

  #stack = [];
  #operations = { ...Forth.#standardOperations };

  #defineOperation([key, ...ops]) {
    if (isNumber(+key)) throw new Error('Invalid definition');

    this.#operations[key.toLowerCase()] = ops.reduce((acc, op) => {
      const operation = isNumber(+op) ?
        this.#stack.push(+op) && identity :
        this.#operations[op.toLowerCase()];
      return (...nums) => operation(...acc(...nums));
    }, identity);
  }

  evaluate(expression) {
    expression.split(' ').forEach((value, i, src) => {
      const operation = value.toLowerCase();
      if (operation === ':') return this.#defineOperation(src.splice(i, src.indexOf(';') + 1 - i).slice(1, -1));
      if (isNumber(+operation)) return this.#stack.push(+operation);
      if (!(operation in this.#operations)) throw new Error('Unknown command');

      this.#stack = this.#stack.concat(this.#operations[operation](...this.#stack.splice(-2, 2)));
    });
  }

  get stack() {
    return [...this.#stack];
  }
}
