#!/usr/bin/env node

/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

/* eslint-disable no-console */

const fs = require('fs').promises;
const path = require('path');

const LINE_NUMBER = '-n';
const FILES_WITH_MATCHES = '-l';
const IGNORE_CASE = '-i';
const INVERT_MATCH = '-v';
const LINE_REGEXP = '-x';
const VALID_OPTIONS = [
  LINE_NUMBER,
  FILES_WITH_MATCHES,
  IGNORE_CASE,
  INVERT_MATCH,
  LINE_REGEXP
];

/**
 * Parses args to an object with the relevant data needed for grep.
 * It's not very smart and relies on the environment variable being in the order
 * of [options, pattern, files].
 */
const parseArgs = ([...args]) => ({
  options: args.splice(0, args.filter(arg => VALID_OPTIONS.includes(arg)).length),
  pattern: args[0],
  files: args.slice(1)
});

/**
 * Creates the pattern matching predicate function which each file/line will be
 * tested against in grep. The predicate uses RegExp.test(line). The RegExp is
 * created based on grep options, and negated based on if the '-v' option is present.
 */
const createPredicate = (options, pattern) => string => options.includes(INVERT_MATCH) ^ new RegExp(
  options.includes(LINE_REGEXP) ? `^${pattern}$` : pattern,
  `m${options.includes(IGNORE_CASE) ? 'i' : ''}`
).test(string);

/**
 * Here's the grep function. Note that I removed the supplied 'readLines' function
 * and, instead, use the promisified version of fs.readFile and await the results
 * here. If the '-l' option is included, I check the whole file for a match (handled
 * by the 'm' regex flag). Otherwise, I split the file lines and check each
 * individual line.
 * 
 * The function is an IIFE with the parsed args passed in.
 */
(async ({ files, options, pattern }) => {
  const fileLines = await Promise.all(files.map(file => fs.readFile(path.resolve(file), { encoding: 'utf-8' })));
  const matchesPattern = createPredicate(options, pattern);

  fileLines.forEach((lines, fileNum) => options.includes(FILES_WITH_MATCHES)
    ? matchesPattern(lines) && console.log(files[fileNum])
    : lines
      .split('\n')
      .forEach((line, lineNum) => matchesPattern(line) && console.log([
        files.length > 1 ? files[fileNum] : [],
        options.includes(LINE_NUMBER) ? lineNum + 1 : [],
        line
      ].flat().join(':'))));
})(parseArgs(process.argv.slice(2)));