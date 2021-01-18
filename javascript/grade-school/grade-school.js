/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const invertBy = obj => Object.entries(obj).reduce((inverted, [key, value]) => ({
  ...inverted,
  [value]: [...(inverted[value] ?? []), key].sort()
}), {});

export class GradeSchool {
  #roster = {};

  add(name, grade) {
    this.#roster[name] = grade;
  }

  grade(target) {
    return Object.entries(this.#roster).flatMap(([name, grade]) => grade === target ? name : []).sort();
  }

  roster() {
    return invertBy(this.#roster);
  }
}
