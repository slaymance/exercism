/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

export default class Allergies {
  static ALLERGENS = [
    'eggs',
    'peanuts',
    'shellfish',
    'strawberries',
    'tomatoes',
    'chocolate',
    'pollen',
    'cats',
  ];

  private allergens: string[];

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
    this.allergens = Allergies.ALLERGENS.filter((_, i) => (score >> i) & 1);
  }

  list(): string[] {
    return this.allergens;
  }
  allergicTo(allergen: string): boolean {
    return this.allergens.includes(allergen);
  }
}
