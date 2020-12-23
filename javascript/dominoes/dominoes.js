/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

const lineUp = (dom1 = [], dom2 = []) => dom1[1] === dom2[0];

export const chain = (dominoes, placed = []) => {
  const lastPlaced = placed[placed.length - 1] ?? [];
  if (!dominoes.length) return lineUp(lastPlaced, placed[0]) ? placed : null;

  for (let i = 0; i < dominoes.length; i++) {
    if (!dominoes[i].includes(lastPlaced[1]) && lastPlaced.length) continue;

    const result = chain(
      dominoes.slice(0, i).concat(dominoes.slice(i + 1)),
      [...placed, lineUp(lastPlaced, dominoes[i]) ? dominoes[i] : [...dominoes[i]].reverse()],
    );

    if (result) return result;
  }

  return null;
};
