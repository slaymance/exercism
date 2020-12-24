/* eslint-disable no-console */

const { RESTRICTED_FILES } = require('./constants');
const { sh } = require('./helpers');

(async function main() {
  const { stdout } = await sh('ls');
  stdout.split('\n').forEach(file => {
    if (!RESTRICTED_FILES.includes(file)) {
      console.log(`Submitting solution to: ${file}`);
      sh(`exercism submit ${file}/${file}.js ${file}/${file}.spec.js`);
    }
  })
})();