//
// This is only a SKELETON file for the 'Spiral Matrix' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class SpiralMatrix {
  static ofSize(size = 0) {
    const matrix = Array.from(Array(size), () => []);
    let num = 1;
    let min = 0;
    let max = size - 1;
    let row = 0;
    let col = 0;

    while (num <= size ** 2) {
      while (col < max) { matrix[row][col++] = num++; }
      while (row < max) { matrix[row++][col] = num++; }
      while (col > min) { matrix[row][col--] = num++; }
      min++;
      while (row > min) { matrix[row--][col] = num++; }
      max--;
      if (num === size ** 2) matrix[row][col] = num++;
    }

    return matrix;
  }
}
