/* eslint-disable no-console */

const { sh } = require('./helpers');
const { SOLUTION_IDS } = require('./constants');

const updateSolution = id => sh(`curl 'https://exercism.io/my/solutions/${id}/update_exercise' -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:84.0) Gecko/20100101 Firefox/84.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Referer: https://exercism.io/my/solutions/${id}' -H 'Content-Type: application/x-www-form-urlencoded' -H 'Origin: https://exercism.io' -H 'Connection: keep-alive' -H 'Cookie: remember_user_token=${process.env.REMEMBER_USER_TOKEN}; user.id=${process.env.USER_ID}; _exercism_session=${process.env.EXERCISM_SESSION}' -H 'Upgrade-Insecure-Requests: 1' --data-raw '_method=patch&authenticity_token=${process.env.AUTHENTICITY_TOKEN}'`);

(async () => {
  console.log('Updating solutions...');
  await Promise.all(SOLUTION_IDS.map(updateSolution));
  console.log('Success!');
})();
