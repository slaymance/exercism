const fs = require('fs').promises;

const CUSTOM_HEADER =
  `/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */
`;

const REPLACED_HEADER = /\/\/\n\/\/ This is only a SKELETON file for the '.*' exercise\. It's been provided as a\n\/\/ convenience to get you started writing code faster\.\n\/\/\n/;

const RESTRICTED_FILES = [
  'node_modules',
  '.eslintrc.js',
  'babel.config.js',
  'headerScript.js'
];

const getAllJSFiles = async (dir = '.', files = []) => {
  for (const file of await fs.readdir(dir)) {
    if (!RESTRICTED_FILES.includes(file)) {
      if (/^(?!.*spec\.js).*\.js$/.test(file)) files = [...files, `${dir}/${file}`];
      if ((await fs.stat(`${dir}/${file}`)).isDirectory()) {
        files = await getAllJSFiles(`${dir}/${file}`, files);
      }
    }
  }

  return files;
};

(async function replaceAndAddHeader() {
  (await getAllJSFiles()).forEach(async path =>
    fs.writeFile(path, (await fs.readFile(path, 'utf8')).replace(REPLACED_HEADER, CUSTOM_HEADER), 'utf8')
  );
})();