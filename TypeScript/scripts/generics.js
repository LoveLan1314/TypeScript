//function identity(arg: number): number {
//    return arg;
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
//function identity(arg: any): any {
//    return arg;
//}
function identity(arg) {
    return arg;
}
//let output = identity<string>("myString");  // type of output will be 'string'
var output = identity("myString"); // type of output will be 'string'
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function loggingIdentity1(arg) {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
var myIdentity = identity;
var myIdentity1 = identity;
var myIdentity2 = identity;
var myIndentity3 = identity;
var GenericNumber = (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var myGenericNumber = new GenericNumber();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; };
var stringNumeric = new GenericNumber();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; };
alert(stringNumeric.add(stringNumeric.zeroValue, "test"));
function loggingIdentity2(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
//loggingIdentity2(3);    // Error, number doesn't have a .length property
loggingIdentity2({ length: 10, value: 3 });
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
getProperty(x, "a"); // okay
//getProperty(x, "m");    // error: Argument of type 'm' isn't assign able to 'a'|'b'|'c'|'d'.
function create(c) {
    return new c();
}
var BeeKeeper = (function () {
    function BeeKeeper() {
    }
    return BeeKeeper;
}());
var ZooKeeper = (function () {
    function ZooKeeper() {
    }
    return ZooKeeper;
}());
var Animal6 = (function () {
    function Animal6() {
    }
    return Animal6;
}());
var Bee = (function (_super) {
    __extends(Bee, _super);
    function Bee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Bee;
}(Animal6));
var Lion = (function (_super) {
    __extends(Lion, _super);
    function Lion() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lion;
}(Animal6));
function createInstance(c) {
    return new c();
}
createInstance(Lion).keeper.nametag; // typechecks!
createInstance(Bee).keeper.hasMask; // typechecks!
//# sourceMappingURL=generics.js.map