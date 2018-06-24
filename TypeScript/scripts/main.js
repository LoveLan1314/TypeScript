"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var browser_1 = require("angular2/platform/browser");
var app_1 = require("./app");
browser_1.bootstrap(app_1.MyApp);
var isDone = false;
var decLiteral = 6;
var hexLiteral = 0xf00d;
var binaryLiteral = 10;
var octalLiteral = 484;
//let name: string = "bob";
//name = "smith";
var name = "Gene";
var age = 37;
var sentence = "Hello, my name is " + name + ".\n\nI'll be " + (age + 1) + " years old next month.";
//let sentence :string = "Hello, my name is " + name + ".\n\n"+
//"I'll be " + (age + 1) + " years old next month.";
var list = [1, 2, 3];
//let list: Array<number> = [1, 2, 3];
// Declare a tuple type
var x;
// Initialize it
x = ['hello', 10]; // OK
// Initialize it incorrectly
//x = [10, 'hello'];    // Error
console.log(x[0].substr(1)); // OK
//console.log(x[1].substr(1));    // Error, 'number' does not have 'substr'
x[3] = 'world'; // OK, 字符串可以复制给(string | number)类型
console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString
//x[6] = true;    // Error, 布尔不是(string | number)类型
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
//let notSure: any = 4;
//notSure = "maybe a string instead";
//notSure = false;    // okay, definitely a boolean
var notSure = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
var prettySure = 4;
//prettySure.toFixed();   // Error: Property 'toFixed' doesn't exist on type 'Object'
var notSureList = [1, true, "free"];
notSureList[1] = 100;
function warnUser() {
    alert("This is my warning message");
}
var unusable = undefined;
var u = undefined;
var n = null;
// 返回never的函数必须存在无法达到的终点
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法到达的终点
function infinitedLoop() {
    while (true) {
    }
}
create({ prop: 0 }); // OK
create(null); // OK
//create(42); // Error
//create("string");   // Error
//create(false);  // Error
//create(undefined);  // Error
var someValue = "this is a string";
//let strLength: number = (<string>someValue).length;
var strLength = someValue.length;
//# sourceMappingURL=main.js.map