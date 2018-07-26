//function printLabel(labelledObj: { label: string }) {
//    console.log(labelledObj.label);
//}

//let myObj = { size: 10, label: "Size 10 Object" };
//printLabel(myObj);

interface LabelledValue {
    label: string;
}

function printLebel(labelledObj: LabelledValue) {
    console.log(labelledObj.label);
}

let myObj = { size: 10, label: "Size 10 Object" };
printLebel(myObj);

interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

function createSquare(config: SquareConfig): { color: string, area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
//p1.x = 5;   // error!

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
//ro[0] = 12; // error!
//ro.push(5); // error!
//ro.length = 100;    // error!
//a = ro; // error!
a = ro as number[];

//let mySquare = createSquare({ colour: "red", width: 100 }); // error!
let squareOptions = { colour: "red", width: 100 };
let mySquare = createSquare(squareOptions);

interface SearchFunc {
    (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
    let result = source.search(subString);
    return result > -1;
}
//mySearch = function (src, sub) {
//    let result = src.search(sub);
//    return result > -1;
//}

interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];

class Animal {
    name: string;
}
class Dog extends Animal {
    breed: string;
}

// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal！
//interface NotOkay {
//    [x: number]: Animal;
//    [x: string]: Dog;
//}

interface NumberDictionary {
    [index: string]: number;
    length: number;     // 可以，length是number类型
    //name: string;       // 错误，`name`的类型与索引类型返回值的类型不匹配
}

interface ReadonlyStringArray {
    readonly [index: number]: string;
}
let myRArray: ReadonlyStringArray = ["Alice", "Bob"];
//myRArray[2] = "Mallory";    // error!

//interface ClockInterface {
//    currentTime: Date;
//    setTime(d: Date): void;
//}

//class Clock implements ClockInterface {
//    currentTime: Date;
//    setTime(d: Date) {
//        this.currentTime = d;
//    }
//    constructor(h: number, m: number) { }
//}

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

//interface Shape {
//    color: String;
//}

//interface Square extends Shape {
//    sideLength: number;
//}

//let square = <Square>{};
//square.color = "blue";
//square.sideLength = 10;

interface Shape {
    color: String;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

class Control {
    private state: any;
}

interface SelectableControl extends Control {
    select(): void;
}

class Buttons extends Control implements SelectableControl {
    select() { }
}

class TextBox extends Control {
    select() { }
}

// Error: Property 'state' is missing in type 'Image'
//class Image implements SelectableControl {
//    select() { }
//}

//class Location {

//}