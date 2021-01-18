/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

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

  #allergens;

  /**
   * Each allergen is assigned to an index such that 2^index = allergen score.
   * For example:
   * 2^3 === 8 === strawberries score
   * This allows us to take the allergies score, convert it to a binary number, and know which allergies are present
   * based on which digits are 1.
   * For example:
   * Allergies score = 53
   * 53 in binary = 110101
   * From right, 0, 2, 4, and 5 places have a 1
   * So allergies = [eggs, shellfish, tomatoes, chocolate]
   */
  constructor(score = 0) {
    this.#allergens = Allergies.ALLERGENS.filter((_, i) => score >> i & 1);
  }

  list = () => this.#allergens;
  allergicTo = allergen => this.#allergens.includes(allergen);
}
