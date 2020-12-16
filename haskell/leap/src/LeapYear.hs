module LeapYear (isLeapYear) where

isLeapYear :: Integer -> Bool
isLeapYear year =
  if isDivisibleBy 100
  then isDivisibleBy 400
  else isDivisibleBy 4
  where isDivisibleBy divisor = mod year divisor == 0
