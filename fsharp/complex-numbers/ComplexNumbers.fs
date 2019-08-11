module ComplexNumbers

open System

type ComplexNumber = float * float

// Returns a tuple of the real/imaginary numbers
let create real  imaginary : ComplexNumber = real, imaginary

// fst pulls the first member of the tuple
let real (z: ComplexNumber) = fst z

// snd pulls the second member of a tuple
let imaginary (z: ComplexNumber) = snd z

let abs z = sqrt (real z ** 2.0 + imaginary z ** 2.0)

let conjugate z = real z, -(imaginary z)

let add z1 z2 : ComplexNumber =
  (real z1 + real z2), (imaginary z1 + imaginary z2)

let sub z1 z2 : ComplexNumber =
  (real z1 - real z2), (imaginary z1 - imaginary z2)

let mul z1 z2 : ComplexNumber =
  ((real z1 * real z2) - (imaginary z1 * imaginary z2)),
  ((imaginary z1 * real z2) + (real z1 * imaginary z2))

let div z1 z2 : ComplexNumber =
  ((real z1 * real z2 + imaginary z1 * imaginary z2) / (real z2 ** 2.0 + imaginary z2 ** 2.0)),
  ((imaginary z1 * real z2 - real z1 * imaginary z2) / (real z2 ** 2.0 + imaginary z2 ** 2.0))

let exp z =
  mul (Math.E ** real z, 0.0) (Math.Cos (imaginary z), Math.Sin (imaginary z))
