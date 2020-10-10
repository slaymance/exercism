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

// Parse the question into an array made up of the question, numbers, and mathematical operators
const parseQuestion = question => question
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
const checkForUnknownOperation = parsedQuestion => {
  if (!parsedQuestion.every((word, i) => {
    if (i === 0) return word === 'What';
    if (i === 1) return word === 'is';
    if (i === parsedQuestion.length - 1) return word === '?';
    return isNumber(word) || isOperatorString(word);
  })) throw new Error('Unknown operation');

  return parsedQuestion;
};

const produceValidExpression = question => {
  const expression = checkForUnknownOperation(parseQuestion(question)).slice(2, -1);

  // Check for proper syntax
  // Any valid expression in this case will have an odd number of symbols
  // If index is even, then the element should be a number; if odd, then it should be an operator
  if (
    isEven(expression.length) || !expression.every(
      (word, i) => isEven(i) ? isNumber(word) : isOperatorString(word)
    )
  ) throw new Error('Syntax error');

  return expression;
};

export const answer = question => produceValidExpression(question)
  .reduce((acc, cur, i, src) => isNumber(cur) ? acc : OPERATOR_MAP[cur](acc, src[i + 1]));
