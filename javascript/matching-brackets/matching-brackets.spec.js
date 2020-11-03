import { isPaired } from './matching-brackets';

describe('Matching Brackets', () => {
  test('paired square brackets', () => {
    expect(isPaired('[]')).toEqual(true);
  });

  test('empty string', () => {
    expect(isPaired('')).toEqual(true);
  });

  test('unpaired brackets', () => {
    expect(isPaired('[[')).toEqual(false);
  });

  test('wrong ordered brackets', () => {
    expect(isPaired('}{')).toEqual(false);
  });

  test('wrong closing bracket', () => {
    expect(isPaired('{]')).toEqual(false);
  });

  test('paired with whitespace', () => {
    expect(isPaired('{ }')).toEqual(true);
  });

  test('partially paired brackets', () => {
    expect(isPaired('{[])')).toEqual(false);
  });

  test('simple nested brackets', () => {
    expect(isPaired('{[]}')).toEqual(true);
  });

  test('several paired brackets', () => {
    expect(isPaired('{}[]')).toEqual(true);
  });

  test('paired and nested brackets', () => {
    expect(isPaired('([{}({}[])])')).toEqual(true);
  });

  test('unopened closing brackets', () => {
    expect(isPaired('{[)][]}')).toEqual(false);
  });

  test('unpaired and nested brackets', () => {
    expect(isPaired('([{])')).toEqual(false);
  });

  test('paired and wrong nested brackets', () => {
    expect(isPaired('[({]})')).toEqual(false);
  });

  test('paired and incomplete brackets', () => {
    expect(isPaired('{}[')).toEqual(false);
  });

  test('too many closing brackets', () => {
    expect(isPaired('[]]')).toEqual(false);
  });

  test('math expression', () => {
    expect(isPaired('(((185 + 223.85) * 15) - 543)/2')).toEqual(true);
  });

  test('complex latex expression', () => {
    expect(
      isPaired(
        '\\left(\\begin{array}{cc} \\frac{1}{3} & x\\\\ \\mathrm{e}^{x} &... x^2 \\end{array}\\right)'
      )
    ).toEqual(true);
  });
});
