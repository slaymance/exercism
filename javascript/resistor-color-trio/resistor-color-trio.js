/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const KILO = 1000;

export class ResistorColorTrio {
  static COLORS = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

  static decodeValue = colors => +colors.reduce((value, color, i) => {
    const code = ResistorColorTrio.COLORS.indexOf(color);
    if (code === -1) throw new Error('invalid color');
    return value + (i === 2 ? '0'.repeat(code) : code);
  }, '');

  #value;

  constructor(colors) {
    this.#value = ResistorColorTrio.decodeValue(colors);
  }

  get label() {
    return `Resistor value: ${this.#value % KILO + ~~(this.#value / KILO)} ${this.#value > KILO ? 'kilo' : ''}ohms`;
  }
}
