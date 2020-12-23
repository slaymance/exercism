/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

export const abilityModifier = ability => {
  if (ability < 3) throw new Error('Ability scores must be at least 3');
  if (ability > 18) throw new Error('Ability scores can be at most 18');

  return Math.floor((ability - 10) / 2);
};

export class Character {
  static DIE_SIDES = 6;
  static BASE_HP = 10;

  static rollAbility() {
    return Array
      .from({ length: 4 }, () => Math.floor(Math.random() * Character.DIE_SIDES + 1))
      .sort((a, b) => a - b)
      .slice(1)
      .reduce((sum, roll) => sum + roll);
  }

  #charisma = Character.rollAbility();
  #constitution = Character.rollAbility();
  #dexterity = Character.rollAbility();
  #intelligence = Character.rollAbility();
  #strength = Character.rollAbility();
  #wisdom = Character.rollAbility();

  get strength() {
    return this.#strength;
  }

  get dexterity() {
    return this.#dexterity;
  }

  get constitution() {
    return this.#constitution;
  }

  get intelligence() {
    return this.#intelligence;
  }

  get wisdom() {
    return this.#wisdom;
  }

  get charisma() {
    return this.#charisma;
  }

  get hitpoints() {
    return Character.BASE_HP + abilityModifier(this.#constitution);
  }
}
