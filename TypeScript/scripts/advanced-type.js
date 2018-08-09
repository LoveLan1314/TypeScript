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
var AdvancedType;
(function (AdvancedType) {
    function extend(first, second) {
        var result = {};
        for (var id in first) {
            result[id] = first[id];
        }
        for (var id in second) {
            if (!result.hasOwnProperty(id)) {
                result[id] = second[id];
            }
        }
        return result;
    }
    var Person = (function () {
        function Person(name) {
            this.name = name;
        }
        return Person;
    }());
    var ConsoleLogger = (function () {
        function ConsoleLogger() {
        }
        ConsoleLogger.prototype.log = function () {
            // ...
        };
        return ConsoleLogger;
    }());
    var jim = extend(new Person("Jim"), new ConsoleLogger());
    var n = jim.name;
    jim.log();
    /**
     * Takes  a string and adds "padding" to the left.
     * If 'padding' is a string, then 'padding' is appended to the left side.
     * If 'padding' is a number, then that number of spaces is added to the left side.
     */
    function padLeft(value, padding) {
        if (typeof padding === "number") {
            return Array(padding + 1).join(" ") + value;
        }
        if (typeof padding === "string") {
            return padding + value;
        }
        throw new Error("Expected string or number, got '" + padding + "'.");
    }
    padLeft("Hello world", 4); // returns "    Hello world"
    var indentedString = padLeft("Hello world", true); // 编译阶段通过，运行时报错
    function padLeft1(value, padding) {
        // ...
    }
    function getSmallPet() {
        // ...
        throw new Error();
    }
    var pet = getSmallPet();
    pet.layEggs(); // okay
    //pet.swim();     // errors
    //let pet1 = getSmallPet();
    //// 每一个成员访问都会报错
    //if (pet1.swim) {
    //    pet1.swim();
    //}
    //else if (pet1.fly) {
    //    pet1.fly();
    //}
    var pet1 = getSmallPet();
    if (pet1.swim) {
        pet1.swim();
    }
    else {
        pet1.fly();
    }
    function isFish(pet) {
        return pet.swim !== undefined;
    }
    if (isFish(pet1)) {
        pet1.swim();
    }
    else {
        pet1.fly();
    }
    function isNumber(x) {
        return typeof x === "number";
    }
    function isString(x) {
        return typeof x === "string";
    }
    function padLeft2(value, padding) {
        if (isNumber(padding)) {
            return Array(padding + 1).join(" ") + value;
        }
        if (isString(padding)) {
            return padding + value;
        }
        throw new Error("Expected string or number, got '" + padding + "'");
    }
    var SpaceRepeatingPadder = (function () {
        function SpaceRepeatingPadder(numSpaces) {
            this.numSpaces = numSpaces;
        }
        SpaceRepeatingPadder.prototype.getPaddingString = function () {
            return Array(this.numSpaces + 1).join(" ");
        };
        return SpaceRepeatingPadder;
    }());
    var StringPadder = (function () {
        function StringPadder(value) {
            this.value = value;
        }
        StringPadder.prototype.getPaddingString = function () {
            return this.value;
        };
        return StringPadder;
    }());
    function getRandomPadder() {
        return Math.random() < 0.5 ? new SpaceRepeatingPadder(4) : new StringPadder("  ");
    }
    // 类型未SpaceRepeatingPadder | StringPadder();
    var padder = getRandomPadder();
    if (padder instanceof SpaceRepeatingPadder) {
        padder; // 类型细化为'SpaceRepeatingPadder'
    }
    if (padder instanceof StringPadder) {
        padder; // 类型细化为'StringPadder'
    }
    var s = "foo";
    //s = null;   // 错误，'null'不能赋值给'string'
    var sn = "bar";
    sn = null; // 可以
    //sn = undefined; // error, 'undefined'不能赋值给'string | null'
    function f(x, y) {
        return x + (y || 0);
    }
    f(1, 2);
    f(1);
    f(1, undefined);
    //f(1, null); // error, 'null' is not assignable to 'number | undefined'
    var C = (function () {
        function C() {
        }
        return C;
    }());
    var c = new C();
    c.a = 12;
    //c.a = undefined;    // error, 'undefined' is not assignable to 'number'
    c.b = 13;
    c.b = undefined; // ok
    //c.b = null; // error, 'null' is not assignable to 'number | undefined'
    function f1(sn) {
        if (sn == null) {
            return "default";
        }
        else {
            return sn;
        }
    }
    function f2(sn) {
        return sn || "default";
    }
    function broken(name) {
        function postfix(epithet) {
            return '.  the ' + epithet; // error, 'name' is possibly null
        }
        name = name || "Bob";
        return postfix("great");
    }
    function fixed(name) {
        function postfix(epithet) {
            return name.charAt(0) + '.  the ' + epithet; // ok
        }
        name = name || "Bob";
        return postfix("great");
    }
    function getName(n) {
        if (typeof n === 'string') {
            return n;
        }
        else {
            return n();
        }
    }
    var UIElement = (function () {
        function UIElement() {
        }
        UIElement.prototype.animate = function (dx, dy, easing) {
            if (easing === "ease-in") {
                // ...
            }
            else if (easing === "ease-out") {
            }
            else if (easing === "ease-in-out") {
            }
            else {
                // error! should not pass null or undefined.
            }
        };
        return UIElement;
    }());
    var button = new UIElement();
    button.animate(0, 0, "ease-in");
    //button.animate(0, 0, "uneasy"); // error: "uneasy" is not allowed here
    function rollDie() {
        throw new Error();
    }
    function assertNever(x) {
        throw new Error("Unexpected object: " + x);
    }
    function area(s) {
        switch (s.kind) {
            case "square": return s.size * s.size;
            case "rectangle": return s.height * s.width;
            case "circle": return Math.PI * Math.pow(s.radius, 2);
        }
    }
    var BasicCalculator = (function () {
        function BasicCalculator(value) {
            if (value === void 0) { value = 0; }
            this.value = value;
        }
        BasicCalculator.prototype.currentValue = function () {
            return this.value;
        };
        BasicCalculator.prototype.add = function (operand) {
            this.value += operand;
            return this;
        };
        BasicCalculator.prototype.multiply = function (operand) {
            this.value *= operand;
            return this;
        };
        return BasicCalculator;
    }());
    var v = new BasicCalculator(2).multiply(5).add(1).currentValue();
    var ScientificCalculator = (function (_super) {
        __extends(ScientificCalculator, _super);
        function ScientificCalculator(value) {
            if (value === void 0) { value = 0; }
            return _super.call(this, value) || this;
        }
        ScientificCalculator.prototype.sin = function () {
            this.value = Math.sin(this.value);
            return this;
        };
        return ScientificCalculator;
    }(BasicCalculator));
    var v1 = new ScientificCalculator(2).multiply(5).sin().add(1).currentValue();
    function pluck(o, names) {
        return names.map(function (n) { return o[n]; });
    }
    var person = {
        name: 'Jarid',
        age: 35
    };
    var strings = pluck(person, ['name']); // ok, string[]
    var personProps; // 'name' | 'age'
    //pluck(person, ['age', 'unknown']); // error, 'unknown' is not in 'name' | 'age'
    function getProperty(o, name) {
        return o[name]; // o[name] is of type T[K]
    }
    var name = getProperty(person, 'name');
    var age = getProperty(person, 'age');
    var keys; // string
    var value; // number
    function proxify(o) {
        throw new Error();
    }
    var props = new Person("");
    var proxyProps = proxify(props);
    function unproxify(t) {
        var result = {};
        for (var k in t) {
            result[k] = t[k].get();
        }
        return result;
    }
    var originalProps = unproxify(proxyProps);
})(AdvancedType || (AdvancedType = {}));
//# sourceMappingURL=advanced-type.js.map