/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

export class InvalidInputError extends Error { }

export class Robot {
  static NORTH = 'north';
  static EAST = 'east';
  static SOUTH = 'south';
  static WEST = 'west';
  static BEARINGS = [Robot.NORTH, Robot.EAST, Robot.SOUTH, Robot.WEST];
  static INSTRUCTIONS = {
    A: 'advance',
    L: 'turnLeft',
    R: 'turnRight'
  };

  static instructions(chain) {
    return [...chain].map(instruction => Robot.INSTRUCTIONS[instruction]);
  }

  #bearing;
  #coordinates;

  get bearing() {
    return this.#bearing;
  }

  get coordinates() {
    return [...this.#coordinates];
  }

  orient(bearing) {
    if (!Robot.BEARINGS.includes(bearing)) throw new InvalidInputError();
    this.#bearing = bearing;
  }

  at(...coordinates) {
    this.#coordinates = coordinates;
  }

  turnRight() {
    this.orient(Robot.BEARINGS[(Robot.BEARINGS.indexOf(this.#bearing) + 1) % Robot.BEARINGS.length]);
  }

  turnLeft() {
    this.orient(Robot.BEARINGS[(Robot.BEARINGS.indexOf(this.#bearing) + 3) % Robot.BEARINGS.length]);
  }

  advance() {
    switch (this.bearing) {
      case Robot.NORTH:
        return this.#coordinates[1]++;
      case Robot.EAST:
        return this.#coordinates[0]++;
      case Robot.SOUTH:
        return this.#coordinates[1]--;
      case Robot.WEST:
        return this.#coordinates[0]--;
    }
  }

  place({ direction, x, y }) {
    this.orient(direction);
    this.at(x, y)
  }

  evaluate(chain) {
    Robot.instructions(chain).forEach(instruction => this[instruction]());
  }
}
