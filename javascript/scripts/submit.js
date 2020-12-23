const { exec } = require('child_process');

const { RESTRICTED_FILES } = require('./constants');

const sh = async cmd => new Promise((resolve, reject) =>
  exec(cmd, (err, stdout, stderr) => err ? reject(err) : resolve({ stdout, stderr }))
);

(async function main() {
  const { stdout } = await sh('ls');
  stdout.split('\n').forEach(file => {
    if (!RESTRICTED_FILES.includes(file)) {
      console.log(`Submitting solution to: ${file}`);
      sh(`exercism submit ${file}/${file}.js ${file}/${file}.spec.js`);
    }
  })
})();