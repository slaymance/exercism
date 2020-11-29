//
// This is only a SKELETON file for the 'Variable Length Quantity' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const BASE = 127;
const BITS = BASE.toString(2).length;

export const encode = (nums = []) => nums.flatMap(num => {
  if (!num) return [0];

  const bytes = [];
  for (let byte = num; byte; byte >>>= BITS) {
    bytes.push((byte & BASE) + (byte !== num && BASE + 1));
  }
  return bytes.reverse();
});

export const decode = (bytes = []) => {
  if (bytes[bytes.length - 1] & BASE + 1) throw new Error('Incomplete sequence');

  return bytes.reduce((nums, byte, i, src) => {
    const lastIndex = Math.max(nums.length - 1, 0);
    nums[lastIndex] = (nums[lastIndex] << BITS) + (byte & BASE) >>> 0;
    if (!(byte & BASE + 1) && i !== src.length - 1) nums.push([]);
    return nums;
  }, []);
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
 * - We check if it's 0 and, if so, we just return an array of 0 ([0]).
 * - We create a byte array to represent the integer
 * - We iterate over 7-bit blocks of the number using byte >>>= BITS
 *   - Using unsigned right shift (>>>) is essential for dealing with 32-bit integers. If we used a regular right
 *     shift (>>), then integers greater than 32 bits will become negative. See https://mzl.la/2Vg7P7Q.
 * - On each iteration, we push the last seven bits to the bytes array (byte & BASE gives us the last 7 bits) and set
 *   the eighth bit to 1 if it's not the last byte in the sequence (+ (byte !== number && BASE + 1)).
 * - Finally, we reverse the array since bytes are added from right to left.
 *
 * Decode:
 * - We first check to see if the last byte in the input has a 1 as the eighth bit and throw an error if so.
 * - Our reduce function starts with an empty array accumulator. The last element of the accumulator is shifted 7 bits
 *   to the left and the byte's last 7 bits are added to it. If the last element is an empty array, the byte's last 7
 *   bits are just added to the array.
 *   - Again, we need to use unsigned right shift to deal with 32-bit integers (>>> 0 converts any signed integer
 *     resulting from left shifting to an unsigned integer)
 * - Finally, if the current byte is not the final byte of the input and it has a 0 as the eighth bit (indicating the
 *   end of a sequence), we push an empty array to the accumulator to prime it for a new number to be decoded.
 */