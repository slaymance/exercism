/**
 * Check out all my TypeScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/typescript
 *
 */

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

export const value = (colors: string[]): number =>
  +colors
    .slice(0, 2)
    .map((color) => COLORS.indexOf(color))
    .join('');

/**
 * The below code is only used to make the tests pass.
 */
export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    if (colors.length < 2)
      throw new Error('At least two colors need to be present');
    this.colors = colors;
  }
  value = (): number => value(this.colors);
}
