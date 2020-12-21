//
// This is only a SKELETON file for the 'Yacht' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const sum = array => array.reduce((sum, num) => sum + num, 0);
const sumRoll = target => dice => sum(dice.filter(roll => roll === target));
const isStraight = dice => [...dice]
  .sort((a, b) => a - b)
  .every((roll, i, src) => !i || roll === src[i - 1] + 1);
const getKind = dice => dice.lastIndexOf(dice[0]) !== 0 ? dice[0] : dice[1];
const isFourOfKind = dice => {
  const kind = getKind(dice);
  return dice.reduce((count, roll) => roll === kind ? count + 1 : count, 0) >= 4;
};

const CATEGORIES = {
  'yacht': dice => +(dice.every((roll, _, src) => roll === src[0]) && 50),
  'choice': sum,
  'big straight': dice => +(isStraight(dice) && dice.includes(6) && 30),
  'little straight': dice => +(isStraight(dice) && dice.includes(1) && 30),
  'four of a kind': dice => +(isFourOfKind(dice) && getKind(dice) * 4),
  'full house': dice => +(new Set(dice).size === 2 && !isFourOfKind(dice) && sum(dice)),
  'sixes': sumRoll(6),
  'fives': sumRoll(5),
  'fours': sumRoll(4),
  'threes': sumRoll(3),
  'twos': sumRoll(2),
  'ones': sumRoll(1)
};

export const score = (dice, category) => CATEGORIES[category](dice);
