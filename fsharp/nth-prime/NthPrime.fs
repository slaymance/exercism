module NthPrime

let prime nth : int option =
  match nth with
  | 0 -> None
  | _ ->
    Seq.initInfinite id |> Seq.filter (fun num ->
      match num with
      | 0 -> false
      | 1 -> false
      | 2 -> true
      | _ -> (Seq.exists (fun x -> num % x = 0) {2 .. num - 1}) |> not
    ) |> Seq.item (nth - 1) |> Some
