"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
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
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first); // outputs 1
console.log(second); // outputs 2
//first = input[0];
//second = input[1];
_a = [second, first], first = _a[0], second = _a[1];
function f(_a) {
    var first = _a[0], second = _a[1];
    console.log(first);
    console.log(second);
}
f(input);
var _b = [1, 2, 3, 4], rfirst = _b[0], rest = _b.slice(1);
console.log(rfirst); // outputs 1
console.log(rest); // outputs [ 2, 3, 4 ]
var afirst = [1, 2, 3, 4][0];
console.log(afirst); // outputs 1
var _c = [1, 2, 3, 4], asecond = _c[1], afourth = _c[3];
var o = {
    a: "foo",
    b: 12,
    c: "bar"
};
//let { a, b } = o;
var a = o.a, passthrough = __rest(o, ["a"]);
var total = passthrough.b + passthrough.c.length;
var newName1 = o.a, newName2 = o.b;
// 此处冒号不是指示类型的，想指定类型需要在后面写上完整的模式 let { a, b }: { a: string, b: number } = o;
//let newName1 = o.a;
//let newName2 = o.b;
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
}
function f1(_a) {
    var a = _a.a, b = _a.b;
    // ...
}
function f2(_a) {
    var _b = _a === void 0 ? { a: "", b: 0 } : _a, a = _b.a, b = _b.b;
    // ...
}
f2(); // ok, default to { a: "", b: 0 }
function f3(_a) {
    var _b = _a === void 0 ? { a: "" } : _a, a = _b.a, _c = _b.b, b = _c === void 0 ? 0 : _c;
    // ...
}
f3({ a: "yes" }); // ok, default b = 0
f3(); // ok, default to {a: ""}, which then defaults b = 0
//f3({}); // error, 'a' is required if you supply an argument
var bfirst = [1, 2];
var bsecond = [3, 4];
var bothPlus = [0].concat(bfirst, bsecond, [5]);
var defaults = { food: "spicy", price: "$$", ambiance: "noisy" };
var search = __assign({}, defaults, { food: "rich" });
var _a;
//# sourceMappingURL=main.js.map