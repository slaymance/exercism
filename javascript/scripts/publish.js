/* eslint-disable no-console */

const { sh } = require('./helpers');
const { SOLUTION_IDS } = require('./constants');

const togglePublish = id => sh(`curl 'https://exercism.io/my/solutions/${id}/toggle_published' -X PATCH -H 'User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:84.0) Gecko/20100101 Firefox/84.0' -H 'Accept: text/javascript, application/javascript, application/ecmascript, application/x-ecmascript, */*; q=0.01' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Referer: https://exercism.io/my/solutions' -H 'X-Requested-With: XMLHttpRequest' -H 'X-CSRF-Token: ${process.env.CSRF_TOKEN}' -H 'Origin: https://exercism.io' -H 'Connection: keep-alive' -H 'Cookie: remember_user_token=${process.env.REMEMBER_USER_TOKEN}; user.id=${process.env.USER_ID}; _exercism_session=${process.env.EXERCISM_SESSION}' --data-raw ''`);

(async () => {
  console.log('Unpublishing...');
  await Promise.all(SOLUTION_IDS.map(togglePublish));
  console.log('Publishing...');
  await Promise.all(SOLUTION_IDS.map(togglePublish));
  console.log('Success!');
})();
