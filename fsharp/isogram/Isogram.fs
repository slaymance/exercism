module Isogram

let isIsogram (str: string) =
  let letters = str.ToLower() |> Seq.filter (fun c -> System.Char.IsLetter (c))
  letters
    |> Seq.distinct
    |> Seq.length = Seq.length letters
