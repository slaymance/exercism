/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

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
const studentPlants = (cups, students) => {
  const rows = cups.split('\n');
  const sortedStudents = students?.slice().sort() ?? STUDENTS;
  return student => {
    const cupNum = sortedStudents.findIndex(testStudent => new RegExp(student, 'i').test(testStudent)) * 2;
    return rows.flatMap(row => [...row.slice(cupNum, cupNum + 2)]).map(cup => PLANTS[cup]);
  };
};

/**
 * The below code is only used to make the tests pass.
 */

/* eslint-disable no-constructor-return */
export class Garden {
  constructor(cups, students) {
    return new Proxy(this, {
      get(_, student) {
        return studentPlants(cups, students)(student);
      }
    })
  }
}