module Hamming

let distance (strand1: string) (strand2: string): int option =
  if String.length strand1 <> String.length strand2 then None
  else
    Some(Seq.fold2 (fun accumulator char1 char2 ->
      match char1 with
      | char1 when char1 <> char2 -> accumulator + 1
      | _ -> accumulator
    ) 0 strand1 strand2)

