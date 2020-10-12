//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const ACTIONS = ['wink', 'double blink', 'close your eyes', 'jump'];

/**
 * ACTIONS.filter will include an action in the handshake if the provided integer has a "1" in the bit corresponding to
 * that action's index in the above array.
 * For example:
 * 13 -> 1101 so handshake will include index 0 ('wink'), index  2 ('close your eyes'), and index 3 ('jump')
 * 
 * A reverse of the handshake actions only occurs if the integer is wholly divisable by 16 an odd number of times
 * int / 16 & 1 checks truncates the float number and checks if it's odd
 * I wanted to see if I could accomplish this solution in one line, hence the conditional to slice the handshake array
 * if it doesn't need to be reversed. It isn't optimal since I don't need to create a new array if a reverse isn't
 * needed. Any thoughts to improve it?
 */
export const commands = int => ACTIONS.filter((_, i) => int & 2 ** i)[int / 16 & 1 ? 'reverse' : 'slice']();
