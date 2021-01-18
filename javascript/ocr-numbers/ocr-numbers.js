/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const UNDERSCORE = '_';
const PIPE = '|';
const GRID_WIDTH = 3;
const GRID_HEIGHT = 4;
const POSSIBLE_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const ROW_REGEXP = new RegExp(`[\\s\\${UNDERSCORE}\\${PIPE}]{${GRID_WIDTH}}`, 'g');

/**
 * This is a mapping of the characters that make up the numbers in each grid. The numbers in the map represent the list
 * of possible numbers that can have that character in each position. For example:
 * FONT_MAP[left|][2] = [0, 2, 6, 8] because all these numbers have a | in the left position of the third row
 *  _  _ 
 * | | _|
 * |_||_  <--- and so on
 */
const FONT_MAP = {
  [UNDERSCORE]: [
    [0, 2, 3, 5, 6, 7, 8, 9],
    [2, 3, 4, 5, 6, 8, 9],
    [0, 2, 3, 5, 6, 8, 9]
  ],
  [`left${PIPE}`]: [
    [],
    [0, 4, 5, 6, 8, 9],
    [0, 2, 6, 8]
  ],
  [`right${PIPE}`]: [
    [],
    [0, 1, 2, 3, 4, 7, 8, 9],
    [0, 1, 3, 4, 5, 6, 7, 8, 9]
  ]
};

// Helper functions for clarity
const isGridHeight = i => i % GRID_HEIGHT === 0;
const zip = (arr1, arr2) => arr2.map((el, i) => [...(arr1[i] || []), el]);
const isOdd = j => !!(j & 1);

/**
 * This function takes the grid and parses it into an array of rows (which will be join by commas), each made up of
 * arrays of numbers in each row, each made up of an array of the strings the make up each number.
 */
const parseGrid = grid => grid
  .split('\n')
  .reduce((nums, _, i, src) => isGridHeight(i) ? [...nums, src.slice(i, i + GRID_HEIGHT - 1)] : nums, [])
  .map(number => number.reduce((numRows, row) => zip(numRows, row.match(ROW_REGEXP)), []));

/**
 * We start with all numbers and filter them based on the the characters and their positions in each string according
 * to the FONT_MAP. If at the end of filtering we're left with an empty array, then we don't have a valid number and we
 * just return '?' in our convert function.
 */
const filterNumbers = (numbers, char, i, j) => numbers.filter(possibleNumber => {
  const includesNum = FONT_MAP[isOdd(j) ? UNDERSCORE : (!j ? 'left' : 'right') + PIPE][i].includes(possibleNumber);
  return [UNDERSCORE, PIPE].includes(char) ? includesNum : !includesNum;
});

export const convert = grid => parseGrid(grid)
  .map(row => row
    .map(num => num.reduce((possibleNumbers, string, i) => [...string].reduce((filteredNumbers, char, j) =>
      filterNumbers(filteredNumbers, char, i, j), possibleNumbers), POSSIBLE_NUMBERS)[0]?.toString() || '?')
    .join(''))
  .join();
