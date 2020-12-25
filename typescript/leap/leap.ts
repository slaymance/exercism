/**
 * Check out all my TypeScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/typescript
 *
 */

const isLeapYear = (year: number): boolean =>
  !(year % 100) ? !(year % 400) : !(year % 4);

export default isLeapYear;
