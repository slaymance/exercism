/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const isEmpty = message => !/\S/.test(message);
const isQuestion = message => /\?\s*$/.test(message);
const isShout = message => /^[^a-z]*[A-Z][^a-z]*$/.test(message);
const isQuestionAndShout = message => isQuestion(message) && isShout(message);
const isDefault = () => true;

const RESPONSE_MAP = [
  [isEmpty, 'Fine. Be that way!'],
  [isQuestionAndShout, 'Calm down, I know what I\'m doing!'],
  [isQuestion, 'Sure.'],
  [isShout, 'Whoa, chill out!'],
  [isDefault, 'Whatever.']
];

export const hey = message => RESPONSE_MAP.find(([check]) => check(message))[1];
