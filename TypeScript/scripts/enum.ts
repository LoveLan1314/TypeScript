enum Direction {
    Up = 1,
    Down,
    Left,
    Rigth
}

enum Response1 {
    No = 0,
    Yes = 1,
}

function respond(recipient: string, message: Response1): void {
    // ...
}

respond("Princess Caroline", Response1.Yes);

// E.X is constant:
enum E { X }

// All enum members in 'E1' and 'E2' are constant.

enum E1 { X, Y, Z }

enum E2 {
    A = 1, B, C
}

enum FileAccess {
    // constant members
    None,
    Read = 1 << 1,
    Write = 1 << 2,
    ReadWrite = Read | Write,
    // computed member
    G = "123".length
}

enum ShapeKind {
    Circle,
    Square,
}

interface Circle {
    kind: ShapeKind.Circle;
    radius: number;
}

interface Square {
    kind: ShapeKind.Square;
    sideLength: number;
}

let c1: Circle = {
    //kind: ShapeKind.Square, // Error!
    kind: ShapeKind.Circle,
    radius: 100,
}

enum Enum {
    A
}
let a1 = Enum.A;
let nameOfA1 = Enum[a1]; // "A"

const enum ConstEnum {
    A = 1,
    B = A * 2,
}

const enum ConstDirections {
    Up,
    Down,
    Left,
    Right,
}

let directions = [ConstDirections.Up, ConstDirections.Down, ConstDirections.Left, ConstDirections.Right];

declare enum Enum {
    C = 2,
}