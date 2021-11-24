export const promisify = fn => (...args) =>
  new Promise((resolve, reject) =>
    fn(...args, (err, result) => (err ? reject(err) : resolve(result)))
  );

export const all = promises => promises ?
  promises.reduce(
    async (acc, promise) => (await acc).concat(await promise),
    Promise.resolve([])
  ) : Promise.resolve();

export const allSettled = promises => promises ?
  promises.reduce(
    async (acc, promise) =>
      (await acc).concat(await promise.catch(err => err)),
    Promise.resolve([])
  ) : Promise.resolve();

export const race = promises => promises ?
  new Promise((resolve, reject) => promises.length
    ? promises.forEach(promise => promise.then(resolve, reject))
    : resolve([])
  ) : Promise.resolve();

export const any = promises => promises ?
  new Promise((resolve, reject) => {
    promises.length
      ? promises.forEach(promise => promise.then(resolve).catch(() => null))
      : resolve([]);
    allSettled(promises).then(reject);
  }) : Promise.resolve();

/**
 * I disagree with some of the tests as they assert different behavior than the
 * native Promise methods. However, this solution passes all the tests as written.
 *
 * await Promise.all() -> TypeError; test asserts undefined
 * await Promise.allSettled() -> TypeError; test asserts undefined
 * await Promise.race([]) -> resolves to nothing; test asserts []
 * await Promise.race() -> TypeError; test asserts undefined
 * await Promise.any([]) -> Error; test asserts []
 * await Promise.any() -> TypeError; test asserts undefined
 */
