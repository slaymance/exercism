/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

export const encode = string => string.replace(/(.)\1+/g, ({ length }, char) => length + char)

export const decode = string => string.replace(/(\d+)(.)/g, (_, length, char) => char.repeat(length));
