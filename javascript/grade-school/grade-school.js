/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

export class GradeSchool {
  #roster = {};
  add = (name, grade) => { this.#roster[grade] = (this.#roster[grade] || []).concat(name).sort(); }
  grade = grade => [...(this.#roster[grade] || [])];
  roster = () => Object.fromEntries(Object.entries(this.#roster).map(([key, grade]) => [key, [...grade]]));
}
