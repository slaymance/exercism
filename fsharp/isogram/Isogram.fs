module Isogram

let isIsogram (str: string) =
  let letters = str.ToLower() |> Seq.filter System.Char.IsLetter
  Seq.length letters = Seq.length (Seq.distinct letters)
