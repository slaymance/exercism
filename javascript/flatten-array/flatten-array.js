//
// This is only a SKELETON file for the 'Flatten Array' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isNil = value => value == null;
export const flatten = collection => collection
  .reduce((result, el) => [...result, ...(Array.isArray(el) ? flatten(el) : !isNil(el) ? [el] : [])], []);
