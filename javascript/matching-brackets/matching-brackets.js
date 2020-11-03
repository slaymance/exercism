//
// This is only a SKELETON file for the 'Matching Brackets' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const BRACKET_MAP = {
  '(': ')',
  '[': ']',
  '{': '}'
};

// Helper functions for clarity
const bracketCharacters = string => string.match(/[\(\[{}\]\)]/g) || [];
const isOpenBracket = bracket => !!BRACKET_MAP[bracket];
const arePairedBrackets = (openBracket, closingBracket) => BRACKET_MAP[openBracket] === closingBracket;
const isEmptyStack = stack => stack.length === 0;

/**
 * I solved this problem using a stack. We iterate through all the bracket characters and, if we find an open bracket,
 * we add it to the top of the stack. If we find a closing bracket, we take the open bracket on top of the stack and
 * compare them to make sure they are pairs. We also check to make sure no open brackets are left on the stack after all
 * of the comparisons are done as those don't have matching closing brackets.
 */
export const isPaired = string => {
  const openBracketStack = [];
  return bracketCharacters(string).every(bracket =>
    isOpenBracket(bracket) ? openBracketStack.push(bracket) : arePairedBrackets(openBracketStack.pop(), bracket)
  ) && isEmptyStack(openBracketStack);
};
