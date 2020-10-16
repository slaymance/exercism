//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  static HOURS_IN_DAY = 24;
  static MINUTES_IN_HOUR = 60;
  static MINUTES_IN_DAY = Clock.MINUTES_IN_HOUR * Clock.HOURS_IN_DAY;

  /**
   * This static method converts a given number of minutes into a time of day expressed in minutes
   * e.g. -20 minutes = 1420 minutes which is 23:40
   */
  static timeInMinutes(minutes) {
    return (minutes % Clock.MINUTES_IN_DAY + Clock.MINUTES_IN_DAY) % Clock.MINUTES_IN_DAY;
  }

  #time = 0;

  /**
   * Converts given hours and minutes into total minutes and adds it to #time.
   * #time is made private so the only way it can be manipulated is through the `plus` and `minus` instance methods.
   */
  constructor(hours = 0, minutes = 0) {
    this.plus(hours * Clock.MINUTES_IN_HOUR + minutes);
  }

  get time() {
    return this.#time;
  }

  toString() {
    return [
      `${Math.floor(this.time / Clock.MINUTES_IN_HOUR)}`, // Calculates hour
      `${this.time % Clock.MINUTES_IN_HOUR}` // Calculates minute
    ].map(num => num.padStart(2, 0)).join(':');
  }

  plus(minutes = 0) {
    this.#time = Clock.timeInMinutes(this.time + minutes);
    return this;
  }

  minus(minutes = 0) {
    return this.plus(-minutes);
  }

  equals(clock) {
    return this.time === clock.time;
  }
}
