/**
 * Check out all my solutions to the Exercism JavaScript track:
 * github.com/slaymance/exercism/tree/main/javascript
 */

export const canExecuteFastAttack = knightIsAwake => !knightIsAwake;
export const canSpy = (...statuses) => statuses.includes(true);
export const canSignalPrisoner = (archerIsAwake, prisonerIsAwake) => !archerIsAwake && prisonerIsAwake;
export const canFreePrisoner = (
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent
) => !archerIsAwake && (petDogIsPresent || prisonerIsAwake && !knightIsAwake);