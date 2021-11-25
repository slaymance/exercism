/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

// Helper function
const last = collection => collection[collection.length - 1];

export const frontDoorResponse = word => word[0];

export const frontDoorPassword = word => word[0].toUpperCase() + word.slice(1).toLowerCase();

export const backDoorResponse = word => last(word.trim());

export const backDoorPassword = word => `${frontDoorPassword(word)}, please`;
