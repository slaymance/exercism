//
// This is only a SKELETON file for the 'Scale Generator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * I evaluate the chromatic scale in the constructor. Whenever asked for an interval, I calculate the chromatic indeces
 * of the notes present in the scale and pull those elements.
 */
export class Scale {
  static FLAT = 'b';
  static SHARP = '#';
  static STEPS = {
    m: 1,
    M: 2,
    A: 3
  };

  #chromatic;

  constructor(tonic) {
    const { FLAT, SHARP } = Scale;
    const usesFlats = tonic[1] === FLAT || /[Fdgcf]$/.test(tonic);
    const chromatic = ['A', '', 'B', 'C', '', 'D', '', 'E', 'F', '', 'G', ''].map((note, i, src) =>
      note || (usesFlats ? src[(i + 1) % src.length] + FLAT : src[i - 1] + SHARP));
    this.#chromatic = chromatic.splice(chromatic.indexOf(tonic[0].toUpperCase() + (tonic[1] || ''))).concat(chromatic);
  }

  chromatic() {
    return [...this.#chromatic];
  }

  interval([...intervals]) {
    return intervals
      .slice(0, -1) // We don't need the last interval since we always start with the 0 index of chromatic scale.
      .reduce((acc, step) => acc.concat(acc[acc.length - 1] + Scale.STEPS[step]), [0])
      .map(i => this.#chromatic[i]);
  }
}
