const fs = require('fs').promises;

const { RESTRICTED_FILES } = require('./constants');

const CUSTOM_HEADER =
  `/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */
`;

const REPLACED_HEADER =
  `/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */
`;

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