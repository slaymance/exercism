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
const isEven = int => !(int & 1);
const isOperatorString = word => !!(OPERATOR_MAP[word]);

// Make sure the question is in the form of 'What is ...?', numbers, and operators
const checkForUnknownOperation = parsedQuestion => {
  if (!parsedQuestion.every((word, i) => {
    switch (i) {
      case 0: return word === 'What';
      case 1: return word === 'is';
      case parsedQuestion.length - 1: return word === '?';
      default: return isNumber(word) || isOperatorString(word);
    }
  })) throw new Error('Unknown operation');

  return parsedQuestion;
};

// Check for proper syntax
// Any valid expression in this case will have an odd number of symbols
// If index is even, then the element should be a number; if odd, then it should be an operator
const checkForSyntaxError = expression => {
  if (isEven(expression.length) || !expression.every(
    (word, i) => isEven(i) ? isNumber(word) : isOperatorString(word)
  )) throw new Error('Syntax error');

  return expression;
};

export const answer = question => question
  // Lines 42-50 parse the question into an array in the form ['What', 'is', Number|Operator, '?']
  |> #.replace(/raised to the/g, '**')
  |> #.replace(/multiplied by/g, '*')
  |> #.replace(/divided by/g, '/')
  |> #.replace(/plus/g, '+')
  |> #.replace(/minus/g, '-')
  |> #.replace(/(st|nd|rd|th)? power/g, '')
  |> #.replace('?', ' ?')
  |> #.split(' ')
  |> #.map(word => +word || word) // converts to numbers if needed
  |> checkForUnknownOperation
  |> #.slice(2, -1) // Get rid of 'What', 'is', and '?' so it's just the expression
  |> checkForSyntaxError
  |> #.reduce(
    (acc, cur, i, src) => isNumber(cur) ? acc : OPERATOR_MAP[cur](acc, src[i + 1])
  );
