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
  const parsedQuestion = question
    .split('?')[0]
    .replace(/plus/g, '+')
    .replace(/minus/g, '-')
    .replace(/multiplied by/g, '*')
    .replace(/divided by/g, '/')
    .replace(/raised to the/g, '**')
    .replace(/st power/g, '')
    .replace(/rd power/g, '')
    .replace(/th power/g, '')
    .split(' ')
    .map(word => isNaN(word) ? word : Number(word));

  if (!parsedQuestion.every((word, i) => {
    if (i === 0) return word === 'What';
    if (i === 1) return word === 'is';
    return !isNaN(word) || word.match(/[\+\-\*\/]/);
  })) throw new Error('Unknown operation');

  const equation = parsedQuestion.slice(2);
  if (
    equation.length % 2 !== 1
    || !equation.every((word, i) => i % 2 === 0 ?
      !isNaN(word)
      : typeof word === 'string' && word.match(/[\+\-\*\/]/))) {
    throw new Error('Syntax error');
  }

  return equation;
};

export const answer = question => produceValidEquation(question)
  .reduce((acc, cur, i, src) => isNaN(cur) ? OPERATOR_MAP[cur](acc, src[i + 1]) : acc);
