interface Named {
    name: string;
}

class Person2 {
    name: string;
}

let p: Named;
// Ok, because of structural typing
p = new Person2();

let xn: Named;
// y's inferred type is { name: string; location: string; }
let y = { name: 'Alice', location: 'Seattle' };
xn = y;

let items = [1, 2, 3];

// Don't force these extra arguments
items.forEach((item, index, array) => console.log(item));

// Should be Ok!
items.forEach((item) => console.log(item));

enum EventType { Mouse, Keyboard }

interface Event1 { timestamp: number; }
interface MouseEvent1 extends Event1 { x: number; y: number }
interface KeyEvent extends Event1 { KeyCode: number }

function listenEvent(eventType: EventType, handler: (n: Event1) => void) {
    /*...*/
}

// Unsound, but useful and common
listenEvent(EventType.Mouse, (e: MouseEvent1) => console.log(e.x + ',' + e.y));

// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, (e: Event1) => console.log((<MouseEvent1>e).x +
    ',' + (<MouseEvent1>e).y));
listenEvent(EventType.Mouse, <(e: Event1) => void>((e: MouseEvent1) =>
    console.log(e.x + ',' + e.y)));

// Still disallowed (clear error). Type safety enforced for wholly 
// incompatible types
//listenEvent(EventType.Mouse, (e: number) => console.log(e));

function invokeLater(args: any[], callback: (...args: any[]) => void) {
    /* ... Invoke callback with 'args' ... */
}

// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], (x, y) => console.log(x + ', ' + y));

// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], (x?, y?) => console.log(x + ', ' + y));

enum Status { Ready, Waiting }
enum Color { Red, Blue, Green };

let status1 = Status.Ready;
//status = Color.Green;   //error

class Animal7 {
    feet: number;
    constructor(name: string, numFeet: number) { }
}

class Size7 {
    feet: number;
    constructor(numFeet: number) { }
}

let a7: Animal7;
let s7: Size7;

a7 = s7;    //OK
s7 = a7;    //OK
