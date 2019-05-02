module RobotName

let robotNames = Set.empty

type Robot = {robotName: string}

let rec generateName() =
    let rand = System.Random()
    let letterSeq = {'A' .. 'Z'}
    let numberSeq = {'0' .. '9'}
    let letterLength = Seq.length(letterSeq)
    let numberLength = Seq.length(numberSeq)
    let letter1 = Seq.item (rand.Next(letterLength)) letterSeq
    let letter2 = Seq.item (rand.Next(letterLength)) letterSeq
    let number1 = Seq.item (rand.Next(numberLength)) numberSeq
    let number2 = Seq.item (rand.Next(numberLength)) numberSeq
    let number3 = Seq.item (rand.Next(numberLength)) numberSeq
    let robotName = String.concat "" <| List.map string [letter1; letter2; number1; number2; number3;]
    let origCount = robotNames.Count
    let newCount = robotNames.Add(robotName).Count
    if origCount <> newCount then robotName
    else generateName ()

let mkRobot(): Robot = { robotName = generateName() }


let name (robot: Robot) = robot.robotName


let reset (robot: Robot) = { robot with robotName = generateName() }
