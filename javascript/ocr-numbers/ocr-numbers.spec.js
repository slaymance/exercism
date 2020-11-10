import { convert } from './ocr-numbers';

describe('ocr', () => {
  test('recognizes zero', () => {
    expect(convert(
      ' _ \n'
      + '| |\n'
      + '|_|\n'
      + '   ',
    )).toBe('0');
  });

  test('recognizes one', () => {
    expect(convert(
      '   \n'
      + '  |\n'
      + '  |\n'
      + '   ',
    )).toBe('1');
  });

  test('recognizes two', () => {
    expect(convert(
      ' _ \n'
      + ' _|\n'
      + '|_ \n'
      + '   ',
    )).toBe('2');
  });

  test('recognizes three', () => {
    expect(convert(
      ' _ \n'
      + ' _|\n'
      + ' _|\n'
      + '   ',
    )).toBe('3');
  });

  test('recognizes four', () => {
    expect(convert(
      '   \n'
      + '|_|\n'
      + '  |\n'
      + '   ',
    )).toBe('4');
  });

  test('recognizes five', () => {
    expect(convert(
      ' _ \n'
      + '|_ \n'
      + ' _|\n'
      + '   ',
    )).toBe('5');
  });

  test('recognizes six', () => {
    expect(convert(
      ' _ \n'
      + '|_ \n'
      + '|_|\n'
      + '   ',
    )).toBe('6');
  });

  test('recognizes seven', () => {
    expect(convert(
      ' _ \n'
      + '  |\n'
      + '  |\n'
      + '   ',
    )).toBe('7');
  });

  test('recognizes eight', () => {
    expect(convert(
      ' _ \n'
      + '|_|\n'
      + '|_|\n'
      + '   ',
    )).toBe('8');
  });

  test('recognizes nine', () => {
    expect(convert(
      ' _ \n'
      + '|_|\n'
      + ' _|\n'
      + '   ',
    )).toBe('9');
  });

  test('recognizes ten', () => {
    expect(convert(
      '    _ \n'
      + '  || |\n'
      + '  ||_|\n'
      + '      ',
    )).toBe('10');
  });

  test('identifies garble', () => {
    expect(convert(
      '   \n'
      + '| |\n'
      + '| |\n'
      + '   ',
    )).toBe('?');
  });

  test('converts 110101100', () => {
    expect(convert(
      '       _     _        _  _ \n'
      + '  |  || |  || |  |  || || |\n'
      + '  |  ||_|  ||_|  |  ||_||_|\n'
      + '                           ',
    )).toBe('110101100');
  });

  test('identifies garble mixed in', () => {
    expect(convert(
      '       _     _           _ \n'
      + '  |  || |  || |     || || |\n'
      + '  |  | _|  ||_|  |  ||_||_|\n'
      + '                           ',
    )).toBe('11?10?1?0');
  });

  test('converts 1234567890', () => {
    expect(convert(
      '    _  _     _  _  _  _  _  _ \n'
      + '  | _| _||_||_ |_   ||_||_|| |\n'
      + '  ||_  _|  | _||_|  ||_| _||_|\n'
      + '                              ',
    )).toBe('1234567890');
  });

  test('converts 123 456 789', () => {
    expect(convert(
      '    _  _ \n'
      + '  | _| _|\n'
      + '  ||_  _|\n'
      + '         \n'
      + '    _  _ \n'
      + '|_||_ |_ \n'
      + '  | _||_|\n'
      + '         \n'
      + ' _  _  _ \n'
      + '  ||_||_|\n'
      + '  ||_| _|\n'
      + '         ',
    )).toBe('123,456,789');
  });
});
