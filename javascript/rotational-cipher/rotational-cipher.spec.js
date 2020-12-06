import { rotate } from './rotational-cipher';

describe('Rotational cipher', () => {
  test('rotate a by 0, same output as input', () => {
    const expected = 'a';
    const actual = rotate('a', 0);

    expect(actual).toEqual(expected);
  });

  test('rotate a by 1', () => {
    const expected = 'b';
    const actual = rotate('a', 1);

    expect(actual).toEqual(expected);
  });

  test('rotate a by 26, same output as input', () => {
    const expected = 'a';
    const actual = rotate('a', 26);

    expect(actual).toEqual(expected);
  });

  test('rotate m by 13', () => {
    const expected = 'z';
    const actual = rotate('m', 13);

    expect(actual).toEqual(expected);
  });

  test('rotate n by 13 with wrap around alphabet', () => {
    const expected = 'a';
    const actual = rotate('n', 13);

    expect(actual).toEqual(expected);
  });

  test('rotate capital letters', () => {
    const expected = 'TRL';
    const actual = rotate('OMG', 5);

    expect(actual).toEqual(expected);
  });

  test('rotate spaces', () => {
    const expected = 'T R L';
    const actual = rotate('O M G', 5);

    expect(actual).toEqual(expected);
  });

  test('rotate numbers', () => {
    const expected = 'Xiwxmrk 1 2 3 xiwxmrk';
    const actual = rotate('Testing 1 2 3 testing', 4);

    expect(actual).toEqual(expected);
  });

  test('rotate punctuation', () => {
    const expected = 'Gzo\'n zvo, Bmviyhv!';
    const actual = rotate('Let\'s eat, Grandma!', 21);

    expect(actual).toEqual(expected);
  });

  test('rotate all letters', () => {
    const expected = 'Gur dhvpx oebja sbk whzcf bire gur ynml qbt.';
    const actual = rotate('The quick brown fox jumps over the lazy dog.', 13);

    expect(actual).toEqual(expected);
  });
});
