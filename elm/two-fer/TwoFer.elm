module TwoFer exposing (twoFer)


printTwoFer : String -> String
printTwoFer name =
    "One for " ++ name ++ ", one for me."

twoFer : Maybe String -> String
twoFer name =
    case name of
        Nothing -> printTwoFer "you"
        Just val -> printTwoFer val
