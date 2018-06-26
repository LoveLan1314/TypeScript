import { bootstrap } from "angular2/platform/browser";
import { MyApp } from "./app";
bootstrap(MyApp);

let isDone: boolean = false;

let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;

//let name: string = "bob";
//name = "smith";
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${name}.

I'll be ${ age + 1} years old next month.`;
//let sentence :string = "Hello, my name is " + name + ".\n\n"+
//"I'll be " + (age + 1) + " years old next month.";

let list: number[] = [1, 2, 3];
//let list: Array<number> = [1, 2, 3];

// Declare a tuple type
let x: [string, number];
// Initialize it
x = ['hello', 10];  // OK
// Initialize it incorrectly
//x = [10, 'hello'];    // Error

console.log(x[0].substr(1));    // OK
//console.log(x[1].substr(1));    // Error, 'number' does not have 'substr'

x[3] = 'world'; // OK, 字符串可以复制给(string | number)类型

console.log(x[5].toString());   // OK, 'string' 和 'number' 都有 toString

//x[6] = true;    // Error, 布尔不是(string | number)类型

enum Color { Red, Green, Blue };
let c: Color = Color.Green;

//let notSure: any = 4;
//notSure = "maybe a string instead";
//notSure = false;    // okay, definitely a boolean

let notSure: any = 4;
notSure.ifItExists();   // okay, ifItExists might exist at runtime
notSure.toFixed();  // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
//prettySure.toFixed();   // Error: Property 'toFixed' doesn't exist on type 'Object'

let notSureList: any[] = [1, true, "free"];
notSureList[1] = 100;

function warnUser(): void {
    alert("This is my warning message");
}

let unusable: void = undefined;

let u: undefined = undefined;
let n: null = null;

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法到达的终点
function infinitedLoop(): never {
    while (true) {

    }
}

declare function create(o: object | null): void;

create({ prop: 0 });    // OK
create(null);   // OK

//create(42); // Error
//create("string");   // Error
//create(false);  // Error
//create(undefined);  // Error

let someValue: any = "this is a string";
//let strLength: number = (<string>someValue).length;
let strLength: number = (someValue as string).length;

let input: [number, number] = [1, 2];
let [first, second] = input;
console.log(first); // outputs 1
console.log(second);    // outputs 2
//first = input[0];
//second = input[1];
[first, second] = [second, first];
function f([first, second]: [number, number]) {
    console.log(first);
    console.log(second);
}
f(input);

let [rfirst, ...rest] = [1, 2, 3, 4];
console.log(rfirst);    // outputs 1
console.log(rest);  // outputs [ 2, 3, 4 ]

let [afirst] = [1, 2, 3, 4];
console.log(afirst);    // outputs 1
let [, asecond, , afourth] = [1, 2, 3, 4];

let o = {
    a: "foo",
    b: 12,
    c: "bar"
};
//let { a, b } = o;

let { a, ...passthrough } = o;
let total = passthrough.b + passthrough.c.length;

let { a: newName1, b: newName2 } = o;
// 此处冒号不是指示类型的，想指定类型需要在后面写上完整的模式 let { a, b }: { a: string, b: number } = o;
//let newName1 = o.a;
//let newName2 = o.b;

function keepWholeObject(wholeObject: { a: string, b?: string }) {
    let { a, b = 1001 } = wholeObject;
}

type C = { a: string, b?: string };
function f1({ a, b }: C): void {
    // ...
}

function f2({ a, b } = { a: "", b: 0 }): void {
    // ...
}
f2();   // ok, default to { a: "", b: 0 }

function f3({ a,b = 0 } = { a: "" }): void {
    // ...
}
f3({ a: "yes" });   // ok, default b = 0
f3();   // ok, default to {a: ""}, which then defaults b = 0
//f3({}); // error, 'a' is required if you supply an argument

let bfirst = [1, 2];
let bsecond = [3, 4];
let bothPlus = [0, ...bfirst, ...bsecond, 5];

let defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
let search = { ...defaults, food: "rich" };
let search2 = { food: "rich", ...defaults };    // 最后food会被defaults中的属性重写

class C1 {
    p = 12;
    m() {

    }
}
let c1 = new C1();
let clone = { ...c1 };
clone.p;    // ok
//clone.m();  // error!