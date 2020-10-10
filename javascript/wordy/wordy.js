// Mapping of string operators to their javascript mathematical equivalents
const OPERATOR_MAP = {
  '**': (num1, num2) => num1 ** num2,
  '*': (num1, num2) => num1 * num2,
  '/': (num1, num2) => num1 / num2,
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2
};

// Helper functions for verifying words in the supplied question
const isNumber = x => !isNaN(x);
const isEven = int => int % 2 === 0;
const isOperatorString = word => typeof word === 'string' && word.match(/[\+\-\*\/]/);

const produceValidEquation = question => {
  // Parse the question into an array made up of numbers and mathematical operators
  const parsedQuestion = question
    .replace(/plus/g, '+')
    .replace(/minus/g, '-')
    .replace(/multiplied by/g, '*')
    .replace(/divided by/g, '/')
    .replace(/raised to the/g, '**')
    .replace(/(st|nd|rd|th)? power/g, '')
    .replace('?', ' ?')
    .split(' ')
    .map(word => isNumber(word) ? Number(word) : word);

  // Make sure the question is in the form of 'What is ...?', numbers, and operators
  if (!parsedQuestion.every((word, i) => {
    if (i === 0) return word === 'What';
    if (i === 1) return word === 'is';
    if (i === parsedQuestion.length - 1) return word === '?';
    return isNumber(word) || isOperatorString(word);
  })) throw new Error('Unknown operation');

  // Check for proper syntax
  // Any valid expression in this case will have an odd number of symbols
  // If index is even, then the element should be a number; if odd, then it should be an operator
  const equation = parsedQuestion.slice(2, -1);
  if (
    isEven(equation.length) || !equation.every(
      (word, i) => isEven(i) ? isNumber(word) : isOperatorString(word)
    )
  ) throw new Error('Syntax error');

  return equation;
};

export const answer = question => produceValidEquation(question)
  .reduce((acc, cur, i, src) => isNumber(cur) ? acc : OPERATOR_MAP[cur](acc, src[i + 1]));
