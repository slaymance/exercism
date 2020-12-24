/* eslint-disable no-console */

const { sh } = require('./helpers');

(async function main() {
  try {
    console.log('Running tests...');
    await sh('yarn test');
    console.log('Tests successful!')
  } catch (err) {
    console.error(err);
  }
})();