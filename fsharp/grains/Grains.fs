module Grains

let exponentiate (n: int): uint64 =
  pown 2UL (n - 1)

let square (n: int): Result<uint64,string> =
  match n with
  | _ when n < 1 || n > 64 -> Error "square must be between 1 and 64"
  | _ -> exponentiate n |> Ok

let total: Result<uint64,string> =
  {1 .. 64} |> Seq.sumBy exponentiate |> Ok
