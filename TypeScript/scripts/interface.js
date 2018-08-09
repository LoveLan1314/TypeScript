//function printLabel(labelledObj: { label: string }) {
//    console.log(labelledObj.label);
//}
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function printLebel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLebel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var p1 = { x: 10, y: 20 };
//p1.x = 5;   // error!
var a = [1, 2, 3, 4];
var ro = a;
//ro[0] = 12; // error!
//ro.push(5); // error!
//ro.length = 100;    // error!
//a = ro; // error!
a = ro;
//let mySquare = createSquare({ colour: "red", width: 100 }); // error!
var squareOptions = { colour: "red", width: 100 };
var mySquare = createSquare(squareOptions);
var mySearch;
mySearch = function (source, subString) {
    var result = source.search(subString);
    return result > -1;
};
var myArray;
myArray = ["Bob", "Fred"];
var myStr = myArray[0];
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var myRArray = ["Alice", "Bob"];
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
var DigitalClock = /** @class */ (function () {
    function DigitalClock(h, m) {
    }
    DigitalClock.prototype.tick = function () {
        console.log("beep beep");
    };
    return DigitalClock;
}());
var AnalogClock = /** @class */ (function () {
    function AnalogClock(h, m) {
    }
    AnalogClock.prototype.tick = function () {
        console.log("tick tock");
    };
    return AnalogClock;
}());
var digital = createClock(DigitalClock, 12, 17);
var analog = createClock(AnalogClock, 7, 32);
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    var counter = function (start) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
var Control = /** @class */ (function () {
    function Control() {
    }
    return Control;
}());
var Buttons = /** @class */ (function (_super) {
    __extends(Buttons, _super);
    function Buttons() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Buttons.prototype.select = function () { };
    return Buttons;
}(Control));
var TextBox = /** @class */ (function (_super) {
    __extends(TextBox, _super);
    function TextBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextBox.prototype.select = function () { };
    return TextBox;
}(Control));
// Error: Property 'state' is missing in type 'Image'
//class Image implements SelectableControl {
//    select() { }
//}
//class Location {
//}
//# sourceMappingURL=interface.js.map