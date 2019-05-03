module PhoneNumber

let isInvalidPunctuation c =
  let validPunctuation = ['+'; '('; ')'; '-'; '.';]
  System.Char.IsPunctuation c && not <| List.contains c validPunctuation

let hasAlphanumerics (nums: array<char>) =
  Array.exists System.Char.IsLetter nums

let hasInvalidPunctuation (nums: array<char>) =
  Array.exists isInvalidPunctuation nums

let isLessThanTenDigits (nums: array<char>) =
  Array.length nums < 10

let isMoreThanElevenDigits (nums: array<char>) =
  Array.length nums > 11

let countryCodeIsInvalid (nums: array<char>) =
  Array.length nums = 11 && Array.get nums 0 <> '1'

let areaCodeStartsWithZero (nums: array<char>) =
  Array.get nums (Array.length nums - 10) = '0'

let areaCodeStartsWithOne (nums: array<char>) =
  Array.get nums (Array.length nums - 10) = '1'

let exchangeCodeStartsWithZero (nums: array<char>) =
  Array.get nums (Array.length nums - 7) = '0'

let exchangeCodeStartsWithOne (nums: array<char>) =
  Array.get nums (Array.length nums - 7) = '1'

let clean (input: string) =
  let numsArray = Array.ofSeq input
  match numsArray with
  | numsArray when hasAlphanumerics numsArray -> Error "alphanumerics not permitted"
  | numsArray when hasInvalidPunctuation numsArray -> Error "punctuations not permitted"
  | _ ->
    let cleanedNums = Array.filter System.Char.IsNumber numsArray
    match cleanedNums with
    | cleanedNums when isLessThanTenDigits cleanedNums -> Error "incorrect number of digits"
    | cleanedNums when isMoreThanElevenDigits cleanedNums -> Error "more than 11 digits"
    | cleanedNums when countryCodeIsInvalid cleanedNums -> Error "11 digits must start with 1"
    | cleanedNums when areaCodeStartsWithZero cleanedNums -> Error "area code cannot start with zero"
    | cleanedNums when areaCodeStartsWithOne cleanedNums -> Error "area code cannot start with one"
    | cleanedNums when exchangeCodeStartsWithZero cleanedNums -> Error "exchange code cannot start with zero"
    | cleanedNums when exchangeCodeStartsWithOne cleanedNums -> Error "exchange code cannot start with one"
    | _ ->
      Ok (System.UInt64.Parse (System.String (Array.sub cleanedNums ((Array.length cleanedNums) - 10) 10)))
