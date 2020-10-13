//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = year => !(year % 4) && !!(year % 100) || !(year % 400);
