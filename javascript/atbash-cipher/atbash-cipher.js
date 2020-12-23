/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const ASCII_START = 'a'.charCodeAt();
const ASCII_END = 'z'.charCodeAt();
const CHUNK_SIZE = 5;

/**
 * My solution uses the experimental pipeline operator which is a TC39 Stage 1 proposal to the JavaScript language. You
 * can read more about it here:
 * https://github.com/tc39/proposal-pipeline-operator
 * 
 * To run this code you'll need to add the "@babel/plugin-proposal-pipeline-operator" to your dev dependencies and
 * include the plugin in your babel.config file (the bigint plugin is already included in the project):
 * plugins: ["@babel/plugin-syntax-bigint", ["@babel/plugin-proposal-pipeline-operator", { "proposal": "smart" }]]
 */
export const decode = string => string
  .replace(/\W/g, '')
  .replace(/[a-z]/g, char => String.fromCharCode(ASCII_START + ASCII_END - char.charCodeAt()));

export const encode = string => string
  |> #.toLowerCase()
  |> decode(#)
  |> #.match(new RegExp(`.{1,${CHUNK_SIZE}}`, 'g'))
  |> #.join(' ');