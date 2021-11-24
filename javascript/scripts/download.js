const fs = require('fs').promises;

const { RESTRICTED_FILES } = require('./constants');
const { sh } = require('./helpers');

const REMOVED_FILES = [
  '.eslintrc',
  '.gitignore',
  '.npmrc',
  'babel.config.js',
  'HELP.md',
  'HINTS.md',
  'LICENSE',
  'package.json'
];

(async function main() {
  const { stdout } = await sh('ls');
  const exercises = stdout.split('\n').filter(exercise => !RESTRICTED_FILES.includes(exercise));

  await Promise.all(exercises.map(exercise => sh(`exercism download --exercise=${exercise} --track=javascript`)));

  await Promise.all(exercises.map(exercise => sh(`rm ${REMOVED_FILES.map(file => `${exercise}/${file}`).join(' ')}`)));

  exercises.forEach(async exercise => {
    const path = `${exercise}/${exercise}.spec.js`;
    fs.writeFile(path, (await fs.readFile(path, 'utf8')).replace(/x?(describe|test|it)(\.skip)?/g, '$1'), 'utf8');
  });
})();
