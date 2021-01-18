/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const CHESSBOARD_SIZE = 64;

export const square = num => {
  if (num < 1 || num > CHESSBOARD_SIZE) throw new Error(`square must be between 1 and ${CHESSBOARD_SIZE}`);
  return 1n << BigInt(num - 1);
};

export const total = () => (1n << BigInt(CHESSBOARD_SIZE)) - 1n;

/**
 * Or If we wanted to handle any ratio and geometric sequence:
 */
const FIRST_TERM = 1;
const RATIO = 2;

export const squareFlex = num => {
  if (num < 1 || num > CHESSBOARD_SIZE)
    throw new Error(`square must be between 1 and ${CHESSBOARD_SIZE}`);
  return BigInt(FIRST_TERM) * BigInt(RATIO) ** BigInt(num - 1);
};

export const totalFlex = () => BigInt(FIRST_TERM) * (1n - BigInt(RATIO) ** BigInt(CHESSBOARD_SIZE)) / BigInt(1 - RATIO);