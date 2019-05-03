module RobotName

let robotNames = Set.empty

type Robot = {robotName: string}

let rec generateName() =
  let rand = System.Random().Next
  let letterSeq = {'A' .. 'Z'}
  let robotName =
    sprintf "%c%c%03i"
      (letterSeq |> Seq.item (rand(26)))
      (letterSeq |> Seq.item (rand(26)))
      (rand(999))
  if robotNames.Count <> robotNames.Add(robotName).Count then robotName
  else generateName()

let mkRobot(): Robot = { robotName = generateName() }

let name(robot: Robot) = robot.robotName

let reset(robot: Robot) =
  robotNames.Remove(robot.robotName) |> ignore
  { robot with robotName = generateName() }
