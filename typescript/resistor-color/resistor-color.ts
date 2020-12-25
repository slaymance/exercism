/**
 * Check out all my TypeScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/typescript
 *
 */

export const COLORS = [
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

export const colorCode = (color: string): number => COLORS.indexOf(color);
