import { studentPlants } from './kindergarten-garden';

describe('Garden', () => {
  test('for Alice', () => {
    expect(studentPlants('RC\nGG')('Alice'))
      .toEqual(['radishes', 'clover', 'grass', 'grass']);
  });

  test('another for Alice', () => {
    expect(studentPlants('VC\nRC')('Alice'))
      .toEqual(['violets', 'clover', 'radishes', 'clover']);
  });

  test('for Bob', () => {
    expect(studentPlants('VVCG\nVVRC')('Bob'))
      .toEqual(['clover', 'grass', 'radishes', 'clover']);
  });

  test('for Bob and Charlie', () => {
    const garden = studentPlants('VVCCGG\nVVCCGG');
    expect(garden('Bob')).toEqual(['clover', 'clover', 'clover', 'clover']);
    expect(garden('Charlie')).toEqual(['grass', 'grass', 'grass', 'grass']);
  });
});

describe('Full garden', () => {
  const diagram = 'VRCGVVRVCGGCCGVRGCVCGCGV\nVRCCCGCRRGVCGCRVVCVGCGCV';
  const garden = studentPlants(diagram);

  test('for Alice', () => {
    expect(garden('Alice'))
      .toEqual(['violets', 'radishes', 'violets', 'radishes']);
  });

  test('for Bob', () => {
    expect(garden('Bob'))
      .toEqual(['clover', 'grass', 'clover', 'clover']);
  });

  test('for Charlie', () => {
    expect(garden('Charlie'))
      .toEqual(['violets', 'violets', 'clover', 'grass']);
  });

  test('for David', () => {
    expect(garden('David'))
      .toEqual(['radishes', 'violets', 'clover', 'radishes']);
  });

  test('for Eve', () => {
    expect(garden('Eve'))
      .toEqual(['clover', 'grass', 'radishes', 'grass']);
  });

  test('for Fred', () => {
    expect(garden('Fred'))
      .toEqual(['grass', 'clover', 'violets', 'clover']);
  });

  test('for Ginny', () => {
    expect(garden('Ginny'))
      .toEqual(['clover', 'grass', 'grass', 'clover']);
  });

  test('for Harriet', () => {
    expect(garden('Harriet'))
      .toEqual(['violets', 'radishes', 'radishes', 'violets']);
  });

  test('for Ileana', () => {
    expect(garden('Ileana'))
      .toEqual(['grass', 'clover', 'violets', 'clover']);
  });

  test('for Joseph', () => {
    expect(garden('Joseph'))
      .toEqual(['violets', 'clover', 'violets', 'grass']);
  });

  test('for Kincaid', () => {
    expect(garden('Kincaid'))
      .toEqual(['grass', 'clover', 'clover', 'grass']);
  });

  test('for Larry', () => {
    expect(garden('Larry'))
      .toEqual(['grass', 'violets', 'clover', 'violets']);
  });
});

describe('Disordered class', () => {
  const diagram = 'VCRRGVRG\nRVGCCGCV';
  const students = ['Samantha', 'Patricia', 'Xander', 'Roger'];
  const garden = studentPlants(diagram, students);

  test('Patricia', () => {
    expect(garden('Patricia'))
      .toEqual(['violets', 'clover', 'radishes', 'violets']);
  });

  test('Roger', () => {
    expect(garden('Roger'))
      .toEqual(['radishes', 'radishes', 'grass', 'clover']);
  });

  test('Samantha', () => {
    expect(garden('Samantha'))
      .toEqual(['grass', 'violets', 'clover', 'grass']);
  });

  test('Xander', () => {
    expect(garden('Xander'))
      .toEqual(['radishes', 'grass', 'clover', 'violets']);
  });
});

describe('Two gardens, different students', () => {
  const diagram = 'VCRRGVRG\nRVGCCGCV';
  const garden1 = studentPlants(diagram, ['Alice', 'Bob', 'Charlie', 'Dan']);
  const garden2 = studentPlants(diagram, ['Bob', 'Charlie', 'Dan', 'Erin']);

  test('Bob and Charlie for each garden', () => {
    expect(garden1('Bob'))
      .toEqual(['radishes', 'radishes', 'grass', 'clover']);
    expect(garden2('Bob'))
      .toEqual(['violets', 'clover', 'radishes', 'violets']);
    expect(garden1('Charlie'))
      .toEqual(['grass', 'violets', 'clover', 'grass']);
    expect(garden2('Charlie'))
      .toEqual(['radishes', 'radishes', 'grass', 'clover']);
  });
});
