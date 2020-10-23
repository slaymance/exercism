//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  static ALLERGENS = [
    'eggs',
    'peanuts',
    'shellfish',
    'strawberries',
    'tomatoes',
    'chocolate',
    'pollen',
    'cats'
  ];

  #score;

  constructor(score = 0) {
    this.#score = score;
  }

  get score() {
    return this.#score;
  }

  list() {
    return Allergies.ALLERGENS.filter((_, i) => this.#allergicToIndex(i));
  }

  allergicTo(allergen) {
    return this.#allergicToIndex(Allergies.ALLERGENS.indexOf(allergen));
  }

  #allergicToIndex(index) {
    return !!(this.score >> index & 1);
  }
}
