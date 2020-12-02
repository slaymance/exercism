//
// This is only a SKELETON file for the 'Connect' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const memoize = fn => {
  const memo = {};
  return (...args) => {
    if (memo[args]) return false;
    memo[args] = true;
    return fn(...args);
  }
};

const rotateAndReflect = matrix =>
  matrix[0].map((_, col) => matrix.map((_, row) => matrix[matrix.length - row - 1][col]).reverse());

const findPath = memoize((row, col, tiles) => {
  if (row === tiles.length - 1) return true;

  return [
    [row - 1, col],
    [row - 1, col + 1],
    [row, col - 1],
    [row, col + 1],
    [row + 1, col - 1],
    [row + 1, col]
  ].some(([testRow, testCol]) =>
    tiles[testRow]?.[testCol] === tiles[row][col] && findPath(testRow, testCol, tiles));
});

const isWinner = (stone, tiles) =>
  tiles[0].some((tile, col) => tile === stone && findPath(0, col, tiles)) ? stone : '';

export const winner = (board = [], stoneOne = 'O', stoneTwo = 'X') => {
  const tiles = board.map(row => row.trim().split(' '));
  return isWinner(stoneOne, tiles) || isWinner(stoneTwo, rotateAndReflect(tiles));
};

/**
 * First of all, I refactored to not use a class. The 'winner' function is given the board and determines a winner.
 * A class would be appropriate if we were making methods to manipulate the board (like a method allowing players to
 * place a stone at a given tile). Since the board never changes, we don't need to manage state. I've included the
 * tests so you can see how I've refactored them to use the 'winner' function.
 *
 * This is how the algorithm works:
 * - isWinner
 *   - Given a target stone and the matrix of the tiles of the game board, it checks each tile in the first row to see
 *     if it matches the target stone.
 *   - If it matches, then we have a possible path to victory so we pass the row and column of the tile and the board to
 *     'findPath' function. If 'findPath' also returns true, then we return that stone as the winner. Else we just
 *     return an empty string as the default.
 *
 * - findPath
 *   - This function is memoized such that if it's ever called with the same row, col, and tiles, it immediately returns
 *     since it's already tested if that position led to a path to victory.
 *     - Memoization is essential here otherwise we'll hit an infinite loop since we don't keep track of tiles we've
 *       already checked otherwise.
 *     - Memoization is worth looking into if you haven't run into the concept before. My implementation isn't a true
 *       memoize since I'm not storing the result of the function call, just keeping track of whether it's already been
 *       called with a given set of arguments.
 *   - If we're on the last row of the board tiles, then we know we've found a solution and return true.
 *   - If it's not the last row of the board, then we need to check for a viable path from the given tile. We create an
 *     array of all the adjacent tiles, check if each one is the same as our target stone, and, if so, recursively call
 *     'findPath' from that position.
 *      - If none of the adjacent tiles are equal to the target stone, or have already been checked by 'findPath', then
 *        the function returns false.
 *
 * - winner
 *   - First we parse the board into a matrix of tiles and ignore the negative space on the board.
 *   - For the top-to-bottom player, this is the board we check.
 *   - For the left-to-right player, in order for the algorithm to work the same way, the board has to be rotated 90
 *     degrees clockwise and reflected across the y-axis, which is handled by the helper function 'rotateAndReflect'.
 */