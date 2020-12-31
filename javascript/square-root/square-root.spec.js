import { squareRoot } from './square-root';

describe('Square root', () => {
  test('root of 1', () => {
    expect(squareRoot(1)).toEqual(1);
  });
  test('root of 4', () => {
    expect(squareRoot(4)).toEqual(2);
  });
  test('root of 5', () => {
    expect(squareRoot(25)).toEqual(5);
  });
  test('root of 81', () => {
    expect(squareRoot(81)).toEqual(9);
  });
  test('root of 196', () => {
    expect(squareRoot(196)).toEqual(14);
  });
  test('root of 65025', () => {
    expect(squareRoot(65025)).toEqual(255);
  });
});
