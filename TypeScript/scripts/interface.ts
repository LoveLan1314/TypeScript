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