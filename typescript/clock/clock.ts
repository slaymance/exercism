/**
 * Check out all my JavaScript Exercism solutions at:
 *
 * github.com/slaymance/exercism/tree/master/javascript
 *
 */

export default class Clock {
  static HOURS_IN_DAY = 24;
  static MINUTES_IN_HOUR = 60;
  static MINUTES_IN_DAY = Clock.MINUTES_IN_HOUR * Clock.HOURS_IN_DAY;

  /**
   * This static method converts a given number of minutes into a time of day expressed in minutes
   * e.g. -20 minutes = 1420 minutes which is 23:40
   */
  static timeInMinutes(minutes: number): number {
    return (
      ((minutes % Clock.MINUTES_IN_DAY) + Clock.MINUTES_IN_DAY) %
      Clock.MINUTES_IN_DAY
    );
  }

  #time = 0;

  /**
   * Converts given hours and minutes into total minutes and adds it to #time.
   * #time is made private so the only way it can be manipulated is through the `plus` and `minus` instance methods.
   */
  constructor(hours = 0, minutes = 0) {
    this.plus(hours * Clock.MINUTES_IN_HOUR + minutes);
  }

  get time(): number {
    return this.#time;
  }

  toString(): string {
    return [
      (this.time / Clock.MINUTES_IN_HOUR) | 0, // Calculates hour
      this.time % Clock.MINUTES_IN_HOUR, // Calculates minute
    ]
      .map((num) => `${num}`.padStart(2, '0'))
      .join(':');
  }

  plus(minutes = 0): Clock {
    this.#time = Clock.timeInMinutes(this.time + minutes);
    return this;
  }

  minus(minutes = 0): Clock {
    return this.plus(-minutes);
  }

  equals(clock: Clock): boolean {
    return this.time === clock.time;
  }
}
