//
// This is only a SKELETON file for the 'Grains' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const CHESSBOARD_SIZE = 64;

export const square = num => {
  if (num < 1 || num > CHESSBOARD_SIZE) throw new Error(`square must be between 1 and ${CHESSBOARD_SIZE}`);
  return 1n << BigInt(num - 1);
};

export const total = () => (1n << BigInt(CHESSBOARD_SIZE)) - 1n;
