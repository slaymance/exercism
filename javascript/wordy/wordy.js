//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const OPERATOR_MAP = {
  '**': (num1, num2) => num1 ** num2,
  '*': (num1, num2) => num1 * num2,
  '/': (num1, num2) => num1 / num2,
  '+': (num1, num2) => num1 + num2,
  '-': (num1, num2) => num1 - num2
};

const produceValidEquation = question => {
  // Parse the question into an array made up of numbers and mathematical operators
  const parsedQuestion = question
    .split('?')[0]
    .replace(/plus/g, '+')
    .replace(/minus/g, '-')
    .replace(/multiplied by/g, '*')
    .replace(/divided by/g, '/')
    .replace(/raised to the/g, '**')
    .replace(/(st|nd|rd|th)? power/g, '')
    .split(' ')
    .map(word => isNaN(word) ? word : Number(word));

  // Make sure the question is in the form of 'What is ...?', numbers, and operators
  if (!parsedQuestion.every((word, i) => {
    if (i === 0) return word === 'What';
    if (i === 1) return word === 'is';
    return !isNaN(word) || word.match(/[\+\-\*\/]/);
  })) throw new Error('Unknown operation');

  // Check for proper syntax
  const equation = parsedQuestion.slice(2);
  if (
    equation.length % 2 !== 1 // Any valid expression in this case will have an odd number of symbols
    || !equation.every((word, i) => i % 2 === 0 ? // If index is odd, then the element should be a number; if even, then it should be an operator
      !isNaN(word)
      : typeof word === 'string' && word.match(/[\+\-\*\/]/))) {
    throw new Error('Syntax error');
  }

  return equation;
};

export const answer = question => produceValidEquation(question)
  .reduce((acc, cur, i, src) => isNaN(cur) ? OPERATOR_MAP[cur](acc, src[i + 1]) : acc);
