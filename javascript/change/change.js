/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const memoize = fn => {
  const memo = {};
  return (...args) => {
    if (memo[args]) return memo[args];
    memo[args] = fn(...args);
    return memo[args];
  };
};

// In this exercise, I continue my refusal to use a class.
export const calculate = (coins, target) => {
  if (target < 0) throw new Error('Negative totals are not allowed.');
  if (target === 0) return [];

  const getChange = memoize((remainder) => coins.reduceRight((change, coin) => {
    if (remainder === coin) {
      return [coin];
    }

    if (remainder > coin) {
      const memoChange = getChange(remainder - coin);
      if (memoChange && (change?.length ?? Infinity) > memoChange.length + 1) return memoChange.concat(coin);
    }

    return change;
  }, null));

  const result = getChange(target);
  if (!result) throw new Error(`The total ${target} cannot be represented in the given currency.`);
  return result;
};

/**
 * My strategy here is to use an inner recursive memoized function (getChange) which calculates the
 * coins needed for the target change by using a top-down approach. It takes the target, iterates
 * over each coin from the right, then does one of the following:
 *
 * - Returns the coin if it's equal to the target.
 * - Checks if the target is greater than the coin, and, if so recurses with a new target of
 *   target - coin, and sets getChange(target - coin).concat(coin) as the least amount of coins
 *   if it's less than change that's already been calculated.
 * - Returns change that's already been calculated if neither of the above is true (and change will be
 *   null if it can't be made with the coins provided).
 *
 * I chose to do an inner function as I want the memoized recursive function to be limited to the scope
 * of each call to calculate. Otherwise, a certain target would be memoized even if the coins provided
 * change. Also, it would bloat memory over time if many different collections of coins were being
 * supplied.
 */