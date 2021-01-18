/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const BASE = 127;
const countBits = num => 1 + ~~(Math.log(num) / Math.log(2));
const BITS = countBits(BASE);

// Helper function that chunks sequences of bytes
const chunk = ([...array]) => array.length ?
  [array.splice(0, 1 + array.findIndex(byte => !(byte & BASE + 1))), ...chunk(array)] :
  [];

export const encode = (nums = []) => nums.flatMap(num => Array
  .from(Array(Math.ceil(countBits(num) / BITS)), (_, i) => (num >>> BITS * i & BASE) + (i && BASE + 1))
  .reverse());

export const decode = (bytes = []) => {
  if (bytes[bytes.length - 1] & BASE + 1) throw new Error('Incomplete sequence');

  return chunk(bytes).map(byteChunk => byteChunk.reduce((num, byte) => (num << BITS) + (byte & BASE) >>> 0, 0));
};

/**
 * My approach to this problem relies upon thinking about every integer as a binary number. Here's a fantastic
 * explanation of VLQ using binary numbers:
 * https://blogs.infosupport.com/a-primer-on-vlq/
 *
 * This works for any base which can be altered by changing the BASE constant.
 * BITS represents the number of bits the BASE supports (for base 127, the number of bits is 7).
 *
 * Encode:
 * Every number in the input will be represented by an array of bytes, hence the use of .flatMap. For each number:
 * - We create an array with a length of the number of bytes needed to represent the number.
 * - For each index, we right shift the number 7 bits times the index and take the right most 7 bits to become our byte.
 *   - Using unsigned right shift (>>>) is essential for dealing with 32-bit integers. If we used a regular right
 *     shift (>>), then integers greater than 32 bits will become negative. See https://mzl.la/2Vg7P7Q.
 * - If the index is not 0 (meaning it's not the end of a byte sequence), we set the eighth bit to 1 (+ (i && BASE + 1))
 * - Finally, we reverse the array since bytes are added from right to left.
 *
 * Decode:
 * - We first check to see if the last byte in the input has a 1 as the eighth bit and throw an error if so.
 * - We chunk the bytes array into numbers represented by sequences of bytes
 * - Our final map iterates over the byte sequences, reducing them to their numbers. Each iteration of reduce:
 *   - Shifts the number left by 7 bits (num << BITS)
 *   - Adds the current byte (ignoring the eighth bit by using byte & BASE)
 *   - Does unsigned right shift to handle numbers greater than 32 bits (>>> 0)
 */