/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const DESCRIPTORS = ['first', 'second', 'third', 'fourth', 'fifth'];

/**
 * Eh, it's not my most elegant solution, but it works without loops.
 */
export const meetup = (year, month, desc, day) => {
  /**
   * Offset is days between meetup day of week and first of month day of week.
   * e.g. Oct. 1 is Thursday, meetup is Saturday, so offset is 2 days
   */
  const dayOffsetStart = (DAYS.indexOf(day) - new Date(year, month - 1, 1).getDay() + DAYS.length) % DAYS.length;

  let descLookup = desc;
  /**
   * If we're looking for the last day, we look to see if it falls within the fifth week of the month, otherwise it's
   * the fourth week.
   */
  if (desc === 'last') descLookup = 4 * DAYS.length + dayOffsetStart < new Date(year, month, 0).getDate() ? 'fifth' : 'fourth';
  /**
   * If we're looking for the teenth, then if the offset is more than 5, it falls in the second week; otherwise, it
   * falls in the third week.
   */
  if (desc === 'teenth') descLookup = dayOffsetStart >= 5 ? 'second' : 'third';
  return new Date(year, month - 1, DAYS.length * DESCRIPTORS.indexOf(descLookup) + 1 + dayOffsetStart);
};
