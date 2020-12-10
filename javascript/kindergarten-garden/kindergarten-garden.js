//
// This is only a SKELETON file for the 'Kindergarten Garden' exercise.
// It's been provided as a convenience to get you started writing code faster.
//

const STUDENTS = [
  'Alice',
  'Bob',
  'Charlie',
  'David',
  'Eve',
  'Fred',
  'Ginny',
  'Harriet',
  'Ileana',
  'Joseph',
  'Kincaid',
  'Larry'
];

const PLANTS = {
  C: 'clover',
  G: 'grass',
  R: 'radishes',
  V: 'violets'
};

/**
 * I just wasn't feeling a class, you know?
 */
export const studentPlants = (cups, students) => {
  const rows = cups.split('\n');
  const sortedStudents = students?.slice().sort() ?? STUDENTS;
  return student => {
    const cupNum = sortedStudents.indexOf(student) * 2;
    return rows.flatMap(row => [...row.slice(cupNum, cupNum + 2)]).map(cup => PLANTS[cup]);
  };
};
