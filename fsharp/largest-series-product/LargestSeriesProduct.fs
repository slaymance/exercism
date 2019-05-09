module LargestSeriesProduct

let largestProduct (input: string) seriesLength : int option =
  match input with
  | _ when input |> Seq.length < seriesLength -> None
  | _ when input |> Seq.isEmpty && seriesLength > 0 -> None
  | _ when input |> Seq.exists (System.Char.IsDigit >> not) -> None
  | _ when seriesLength < 0 -> None
  | _ when seriesLength = 0 -> Some 1
  | _ -> input
      |> Seq.map (System.Char.GetNumericValue >> int)
      |> Seq.windowed seriesLength
      |> Seq.map (Seq.fold (*) 1)
      |> Seq.max
      |> Some
