module NthPrime

let isPrime num =
  Seq.exists (fun x -> num % x = 0) {2 .. float num |> sqrt |> int} |> not

let rec possiblePrimeNumbers num = seq {
  yield num - 1
  yield num + 1
  yield! possiblePrimeNumbers (num + 6)
}

let primeNumbers = seq {
  yield 2
  yield 3
  yield! Seq.filter isPrime (possiblePrimeNumbers 6)
}

let prime nth : int option =
  match nth with
  | 0 -> None
  | _ ->
    primeNumbers |> Seq.item (nth - 1) |> Some
