module Pangram

let isPangram (input: string): bool =
  ['a' .. 'z'] |> Seq.forall (fun c -> (input.ToLower()) |> String.exists (fun i -> i = c))
