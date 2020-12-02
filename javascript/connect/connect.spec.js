import { winner } from './connect';

describe('Judging a game of connect', () => {
  test('an empty board has no winner', () => {
    const board = [
      '. . . . .',
      ' . . . . .',
      '  . . . . .',
      '   . . . . .',
      '    . . . . .',
    ];
    expect(winner(board)).toEqual('');
  });

  test('X can win on a 1x1 board', () => {
    const board = [
      'X',
    ];
    expect(winner(board)).toEqual('X');
  });

  test('O can win on a 1x1 board', () => {
    const board = [
      'O',
    ];
    expect(winner(board)).toEqual('O');
  });

  test('only edges does not make a winner', () => {
    const board = [
      'O O O X',
      ' X . . X',
      '  X . . X',
      '   X O O O',
    ];
    expect(winner(board)).toEqual('');
  });

  test('illegal diagonal does not make a winner', () => {
    const board = [
      'X O . .',
      ' O X X X',
      '  O X O .',
      '   . O X .',
      '    X X O O',
    ];
    expect(winner(board)).toEqual('');
  });

  test('nobody wins crossing adjacent angles', () => {
    const board = [
      'X . . .',
      ' . X O .',
      '  O . X O',
      '   . O . X',
      '    . . O .',
    ];
    expect(winner(board)).toEqual('');
  });

  test('X wins crossing from left to right', () => {
    const board = [
      '. O . .',
      ' O X X X',
      '  O X O .',
      '   X X O X',
      '    . O X .',
    ];
    expect(winner(board)).toEqual('X');
  });

  test('O wins crossing from top to bottom', () => {
    const board = [
      '. O . .',
      ' O X X X',
      '  O O O .',
      '   X X O X',
      '    . O X .',
    ];
    expect(winner(board)).toEqual('O');
  });

  test('X wins using a convoluted path', () => {
    const board = [
      '. X X . .',
      ' X . X . X',
      '  . X . X .',
      '   . X X . .',
      '    O O O O O',
    ];
    expect(winner(board)).toEqual('X');
  });

  test('X wins using a spiral path', () => {
    const board = [
      'O X X X X X X X X',
      ' O X O O O O O O O',
      '  O X O X X X X X O',
      '   O X O X O O O X O',
      '    O X O X X X O X O',
      '     O X O O O X O X O',
      '      O X X X X X O X O',
      '       O O O O O O O X O',
      '        X X X X X X X X O',
    ];
    expect(winner(board)).toEqual('X');
  });
});
