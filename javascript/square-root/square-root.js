//
// This is only a SKELETON file for the 'Square root' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const bitPairs = n => {
  const binary = n.toString(2);
  return binary
    .padStart(binary.length + (binary.length & 1), 0)
    .match(/\d{1,2}/g);
};

/**
 * This is the digit-by-digit method using binary numbers. It only works for perfect squares.
 * For non-perfect squares, it gives the square root of the closest perfect square which it
 * is greater than.
 */
export const squareRoot = n => {
  const [root] = bitPairs(n).reduce(([root, remainder], pair, i) => {
    const minuend = (remainder << 2) + parseInt(pair, 2);
    const subtrahend = (1 << i + (i > 0)) + (i > 0);
    const shouldSubtract = minuend >= subtrahend;
    return [(root << 1) + shouldSubtract, minuend - (shouldSubtract && subtrahend)];
  }, [0, 0]);

  return root;
};
