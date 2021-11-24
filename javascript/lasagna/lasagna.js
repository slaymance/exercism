/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

const PREPARATION_MINUTES_PER_LAYER = 2;
export const EXPECTED_MINUTES_IN_OVEN = 40;

export const remainingMinutesInOven = actualMinutesInOven => EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;

export const preparationTimeInMinutes = numberOfLayers => PREPARATION_MINUTES_PER_LAYER * numberOfLayers;

export const totalTimeInMinutes = (numberOfLayers, actualMinutesInOven) =>
  preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
