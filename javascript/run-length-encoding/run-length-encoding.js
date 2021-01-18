/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

export const encode = string => string.replace(/(.)\1+/g, ({ length }, char) => length + char);

export const decode = string => string.replace(/(\d+)(.)/g, (_, length, char) => char.repeat(length));
