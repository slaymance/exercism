#!/usr/bin/env node

// The above line is a shebang. On Unix-like operating systems, or environments,
// this will allow the script to be run by node, and thus turn this JavaScript
// file into an executable. In other words, to execute this file, you may run
// the following from your terminal:
//
// ./grep.js args
//
// If you don't have a Unix-like operating system or environment, for example
// Windows without WSL, you can use the following inside a window terminal,
// such as cmd.exe:
//
// node grep.js args
//
// Read more about shebangs here: https://en.wikipedia.org/wiki/Shebang_(Unix)

const fs = require('fs').promises;
const path = require('path');

const VALID_OPTIONS = [
  '-n', // add line numbers
  '-l', // print file names where pattern is found
  '-i', // ignore case
  '-v', // reverse files results
  '-x', // match entire line
];

const ARGS = process.argv;
//
// This is only a SKELETON file for the 'Grep' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
// This file should *not* export a function. Use ARGS to determine what to grep
// and use console.log(output) to write to the standard output.

const negate = pred => (...args) => !pred(...args);

/**
 * Parses args to an object with the relevant data needed for grep.
 * It's not very smart and relies on the environment variable being in the order
 * of [flags, pattern, files].
 */
const parseArgs = ([...args]) => ({
  flags: args.splice(0, args.filter(arg => VALID_OPTIONS.includes(arg)).length),
  pattern: args.slice(0, 1),
  files: args.slice(1)
});

/**
 * Creates the pattern matching predicate function which each file/line will be
 * tested against in grep. The predicate uses RegExp.test(line). The RegExp is
 * created based on grep flags, and negated based on if the '-v' flag is present.
 */
const createPredicate = (flags, pattern) => {
  const matchEntire = flags.includes('-x') ? ['^', '$'] : ['', ''];
  const regex = new RegExp(matchEntire[0] + pattern + matchEntire[1], 'm' + (flags.includes('-i') ? 'i' : ''));
  const pred = string => regex.test(string);
  return flags.includes('-v') ? negate(pred) : pred;
};

/**
 * Here's the grep function. Note that I removed the supplied 'readLines' function
 * and, instead, use the promisified version of fs.readFile and await the results
 * here. If the '-l' flag is included, I check the whole file for a match (handled
 * by the 'm' regex flag). Otherwise, I split the file lines and  check each
 * individual line.
 * 
 * The function is an IIFE with the parsed args passed in.
 */
(async ({ files, flags, pattern }) => {
  const fileLines = await Promise.all(files.map(file => fs.readFile(path.resolve(file), { encoding: 'utf-8' })));
  const matchesPattern = createPredicate(flags, pattern);

  flags.includes('-l')
    ? fileLines.forEach((lines, fileNum) => matchesPattern(lines) && console.log(files[fileNum]))
    : fileLines.forEach((lines, fileNum) => lines
      .split(/\r?\n/)
      .forEach((line, lineNum) => matchesPattern(line) && console.log([
        files.length > 1 ? files[fileNum] : [],
        flags.includes('-n') ? lineNum + 1 : [],
        line
      ].flat().join(':'))));
})(parseArgs(ARGS.slice(2)));