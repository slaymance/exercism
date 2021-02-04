/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

/* eslint-disable no-constructor-return */
/* eslint-disable prefer-rest-params */

export const abilityModifier = ability => {
  if (ability < 3) throw new Error('Ability scores must be at least 3');
  if (ability > 18) throw new Error('Ability scores can be at most 18');

  return Math.floor((ability - 10) / 2);
};

export class Character {
  static DIE_SIDES = 6;
  static BASE_HP = 10;
  static STATS = [
    'strength',
    'dexterity',
    'constitution',
    'intelligence',
    'wisdom',
    'charisma'
  ];

  static rollAbility() {
    return Array
      .from({ length: 4 }, () => Math.floor(Math.random() * Character.DIE_SIDES + 1))
      .sort((a, b) => a - b)
      .slice(1)
      .reduce((sum, roll) => sum + roll);
  }

  constructor() {
    return new Proxy(this, {
      get(character, stat) {
        if (!Reflect.has(...arguments) && Character.STATS.includes(stat))
          Reflect.set(character, stat, Character.rollAbility());

        return Reflect.get(...arguments);
      }
    });
  }

  get hitpoints() {
    return Character.BASE_HP + abilityModifier(this.constitution);
  }
}
