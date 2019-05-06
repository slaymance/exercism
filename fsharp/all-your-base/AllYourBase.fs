module AllYourBase

let rec divideAndConquer (inputDigits: int) (outputBase: int) =
  let dividedDigits = inputDigits / outputBase
  let remainder = inputDigits % outputBase
  match dividedDigits with
  | 0 -> [remainder]
  | _ -> List.append (divideAndConquer dividedDigits outputBase) [remainder]


let rebase digits inputBase outputBase =
  match digits with
    | _ when inputBase < 2 || outputBase < 2 -> None
    | _ when List.exists (fun x -> x >= inputBase || x < 0) digits -> None
    | [] -> Some [0]
    | _ ->
      let digitsInBase10 = List.rev digits |> List.mapi (fun i x -> x * (pown inputBase i)) |> List.sum
      divideAndConquer digitsInBase10 outputBase |> Some
