import { calculate } from './change';

describe('Change', () => {
  test('test change for 1 cent', () => {
    const result = calculate([1, 5, 10, 25], 1);
    expect(result).toEqual([1]);
  });

  test('test single coin change', () => {
    const result = calculate([1, 5, 10, 25, 100], 25);
    expect(result).toEqual([25]);
  });

  test('test multiple coin change', () => {
    const result = calculate([1, 5, 10, 25, 100], 15);
    expect(result).toEqual([5, 10]);
  });

  test('test change with Lilliputian Coins where a greedy algorithm fails', () => {
    // https://en.wikipedia.org/wiki/Change-making_problem#Greedy_method
    const result = calculate([1, 4, 15, 20, 50], 23);
    expect(result).toEqual([4, 4, 15]);
  });

  test('test change with Lower Elbonia Coins where a greedy algorithm fails', () => {
    // https://en.wikipedia.org/wiki/Change-making_problem#Greedy_method
    const result = calculate([1, 5, 10, 21, 25], 63);
    expect(result).toEqual([21, 21, 21]);
  });

  test('test large amount of change', () => {
    const result = calculate([1, 2, 5, 10, 20, 50, 100], 999);
    expect(result).toEqual([2, 2, 5, 20, 20, 50, 100, 100, 100, 100, 100, 100, 100, 100, 100]);
  });

  test('test possible change without unit coins available', () => {
    const result = calculate([2, 5, 10, 20, 50], 21);
    expect(result).toEqual([2, 2, 2, 5, 10]);
  });

  test('test another possible change without unit coins available', () => {
    const result = calculate([4, 5], 27);
    expect(result).toEqual([4, 4, 4, 5, 5, 5]);
  });

  test('test no coins make 0 change', () => {
    const result = calculate([1, 5, 10, 21, 25], 0);
    expect(result).toEqual([]);
  });

  test('error testing for change smaller than the smallest of coins', () => {
    const message = 'The total 3 cannot be represented in the given currency.';
    const test = () => { calculate([5, 10], 3); };
    expect(test).toThrowError(message);
  });

  test('error testing if no combination can add up to target', () => {
    const message = 'The total 94 cannot be represented in the given currency.';
    const test = () => { calculate([5, 10], 94); };
    expect(test).toThrowError(message);
  });

  test('negative change is rejected', () => {
    const message = 'Negative totals are not allowed.';
    const test = () => { calculate([1, 2, 5], -5); };
    expect(test).toThrowError(message);
  });
});
