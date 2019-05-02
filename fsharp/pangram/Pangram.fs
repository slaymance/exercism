module Pangram

let isPangram (input: string): bool =
  Seq.forall (fun c -> String.exists (fun i -> i = c) (input.ToLower())) ['a' .. 'z']
