/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const BILLABLE_HOURS_IN_DAY = 8;
const BILLABLE_DAYS_IN_MONTH = 22;

export const dayRate = ratePerHour => ratePerHour * BILLABLE_HOURS_IN_DAY;

export const daysInBudget = (budget, ratePerHour) => budget / dayRate(ratePerHour) | 0;

export const priceWithMonthlyDiscount = (ratePerHour, numDays, discount) => {
  const fullRateDays = numDays % BILLABLE_DAYS_IN_MONTH;
  return Math.ceil(dayRate(ratePerHour) * (fullRateDays + (1 - discount) * (numDays - fullRateDays)));
};
