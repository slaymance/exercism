/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

/* eslint-disable no-constructor-return */

/**
 * I'm sad they changed this one. The requirement to have a getter for each student made it unique.
 * I've left my solution to the old test cases below since I thought it was a practical use case
 * for a Proxy.
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

  #rows;
  #students;

  constructor(cups, students) {
    this.#rows = cups.split('\n');
    this.#students = students?.slice().sort() ?? Garden.STUDENTS;
  }

  plants(student) {
    const cupNum = this.#students.findIndex(testStudent => new RegExp(student, 'i').test(testStudent)) * 2;
    return this.#rows.flatMap(row => [...row.slice(cupNum, cupNum + 2)]).map(cup => Garden.PLANTS[cup]);
  }
}

export class GardenOld {
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
