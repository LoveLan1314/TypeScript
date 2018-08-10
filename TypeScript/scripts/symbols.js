"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var collection_1 = require("angular2/src/facade/collection");
var Symbols;
(function (Symbols) {
    var sym1 = Symbol();
    var sym2 = Symbol("key");
    var sym3 = Symbol("key");
    sym2 === sym3; // false, symbols是唯一的
    var sym = Symbol();
    var obj = (_a = {},
        _a[sym] = "value",
        _a);
    console.log(obj[sym]); // "value"
    var getClassNameSymbol = Symbol();
    var C = /** @class */ (function () {
        function C() {
        }
        C.prototype[getClassNameSymbol] = function () {
            return "C";
        };
        return C;
    }());
    var c = new C();
    var className = c[getClassNameSymbol](); // "C"
    var someArray = [1, "string", false];
    for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
        var entry = someArray_1[_i];
        console.log(entry); // 1, "string", false
    }
    var list = [4, 5, 6];
    for (var i in list) {
        console.log(i); // "0", "1", "2"
    }
    for (var _b = 0, list_1 = list; _b < list_1.length; _b++) {
        var i = list_1[_b];
        console.log(i); // "4", "5", "6"
    }
    var pets = new collection_1.Set(["Cat", "Dog", "Hamster"]);
    //pets["species"] = "mammals";
    for (var pet in pets) {
        console.log(pet); // "species"
    }
    for (var pet in pets) {
        console.log(pet); // "Cat", "Dog", "Hamster"
    }
    var numbers = [1, 2, 3];
    for (var _c = 0, numbers_1 = numbers; _c < numbers_1.length; _c++) {
        var num = numbers_1[_c];
        console.log(num);
    }
    var _a;
})(Symbols || (Symbols = {}));
//# sourceMappingURL=symbols.js.map