/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

/* eslint-disable no-constructor-return */

/**
 * My first Proxy! It's useful here since we want to create a property for each student
 * on the class. Think of the Proxy as a "catch-all" getter.
 */
export class Garden {
  static STUDENTS = [
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
  static PLANTS = {
    C: 'clover',
    G: 'grass',
    R: 'radishes',
    V: 'violets'
  };

  constructor(cups, students) {
    const rows = cups.split('\n');
    const sortedStudents = students?.slice().sort() ?? Garden.STUDENTS;
    return new Proxy(this, {
      get(_, student) {
        const cupNum = sortedStudents.findIndex(testStudent => new RegExp(student, 'i').test(testStudent)) * 2;
        return rows.flatMap(row => [...row.slice(cupNum, cupNum + 2)]).map(cup => Garden.PLANTS[cup]);
      }
    });
  }
}
