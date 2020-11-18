//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  #roster = {};
  add = (name, grade) => { this.#roster[grade] = (this.#roster[grade] || []).concat(name).sort(); }
  grade = grade => [...(this.#roster[grade] || [])];
  roster = () => Object.fromEntries(Object.entries(this.#roster).map(([key, grade]) => [key, [...grade]]));
}
