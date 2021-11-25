/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

export const getItem = (cards, position) => cards[position];

export const setItem = (cards, position, ...replacements) => cards.splice(position, 1, ...replacements) && cards;

export const insertItemAtTop = (cards, newCard) => setItem(cards, cards.length, newCard);

export const removeItem = (cards, position) => setItem(cards, position);

export const removeItemFromTop = cards => setItem(cards, cards.length - 1);

export const insertItemAtBottom = (cards, newCard) => cards.unshift(newCard) && cards;

export const removeItemAtBottom = cards => setItem(cards, 0);

export const checkSizeOfStack = ({ length }, stackSize) => length === stackSize;
