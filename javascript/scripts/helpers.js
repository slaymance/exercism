const { exec } = require('child_process');

const sh = async cmd => new Promise((resolve, reject) =>
  exec(cmd, (err, stdout, stderr) => err ? reject(err) : resolve({ stdout, stderr }))
);

module.exports = {
  sh
};