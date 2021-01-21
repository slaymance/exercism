/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const isEmpty = (message: string): boolean => !/\S/.test(message);
const isQuestion = (message: string): boolean => /\?\s*$/.test(message);
const isShout = (message: string): boolean =>
  /^[^a-z]*[A-Z][^a-z]*$/.test(message);
const isQuestionAndShout = (message: string): boolean =>
  isQuestion(message) && isShout(message);

const RESPONSE_MAP: [(message: string) => boolean, string][] = [
  [isEmpty, 'Fine. Be that way!'],
  [isQuestionAndShout, "Calm down, I know what I'm doing!"],
  [isQuestion, 'Sure.'],
  [isShout, 'Whoa, chill out!'],
];
const hey = (message: string): string =>
  RESPONSE_MAP.find(([check]) => check(message))?.[1] ?? 'Whatever.';

/**
 * The below code is only used to make the tests pass.
 */
export default class Bob {
  hey = hey;
}
