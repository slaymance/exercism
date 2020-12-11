//
// This is only a SKELETON file for the 'Darts' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

/**
 * I chose a simple array to represent each circle: the 0 index of each element
 * represents the radius and the 1 index represents the points. The radii must
 * be in increasing order for my .find solution to work.
 * 
 * The solution is simple: find the distance from the origin to the provided
 * dart's position and return the score of the circle with radius that is closest
 * to, but not less than, that distance.
 */
const POINTS = [
  [1, 10],
  [5, 5],
  [10, 1],
  [Infinity, 0]
];

export const score = (x, y) => POINTS.find(circle => Math.hypot(x, y) <= circle[0])[1];
