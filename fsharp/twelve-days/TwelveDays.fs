module TwelveDays

type Section = {
  day: string;
  gift: string;
}

let songSections = [|
  {
    day = "first";
    gift = "a Partridge in a Pear Tree";
  };
  {
    day = "second";
    gift = "two Turtle Doves";
  };
  {
    day = "third";
    gift = "three French Hens";
  };
  {
    day = "fourth";
    gift = "four Calling Birds";
  };
  {
    day = "fifth";
    gift = "five Gold Rings";
  };
  {
    day = "sixth";
    gift = "six Geese-a-Laying";
  };
  {
    day = "seventh";
    gift = "seven Swans-a-Swimming";
  };
  {
    day = "eighth";
    gift = "eight Maids-a-Milking";
  };
  {
    day = "ninth";
    gift = "nine Ladies Dancing";
  };
  {
    day = "tenth";
    gift = "ten Lords-a-Leaping";
  };
  {
    day = "eleventh";
    gift = "eleven Pipers Piping";
  };
  {
    day = "twelfth";
    gift = "twelve Drummers Drumming"
  };
|]

let createVerse (day: string) (gifts: string) = sprintf "On the %s day of Christmas my true love gave to me: %s." day gifts

let createGifts (day: int) =
  let iterateGifts gifts index =
    let gift = (Array.get songSections index).gift
    if index = 0 then gifts + ", and " + gift
    elif gifts = "" then gift
    else gifts + ", " + gift
  if day = 0 then (Array.get songSections day).gift
  else List.fold iterateGifts "" (List.rev [0 .. day])

let recite (start: int) (stop: int) =
  [start .. stop ] |> List.map (fun num ->
    let index = num - 1
    let day = (Array.get songSections index).day
    let gifts = createGifts index
    createVerse day gifts
  )
