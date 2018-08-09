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
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter("world");
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog1.prototype.bark = function () {
        console.log("Woof! Woof!");
    };
    return Dog1;
}(Animal1));
var dog = new Dog1();
dog.bark();
dog.move(10);
dog.bark();
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    Animal2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal2;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal2));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal2));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    return Animal3;
}());
//new Animal3("Cat").name;    // 错误：'name'是私有的
var Animal4 = /** @class */ (function () {
    function Animal4(theName) {
        this.name = theName;
    }
    return Animal4;
}());
var Rhino = /** @class */ (function (_super) {
    __extends(Rhino, _super);
    function Rhino() {
        return _super.call(this, "Rhino") || this;
    }
    return Rhino;
}(Animal4));
var Employee = /** @class */ (function () {
    function Employee(theName) {
        this.name = theName;
    }
    return Employee;
}());
var animal4 = new Animal4("Goat");
var rhino = new Rhino();
var employee = new Employee("Bob");
animal4 = rhino;
//animal4 = employee; // 错误：Animal 与 Employee 不兼容.
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee1 = /** @class */ (function (_super) {
    __extends(Employee1, _super);
    function Employee1(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee1.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee1;
}(Person));
var howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name);   // 错误
var Person1 = /** @class */ (function () {
    function Person1(theName) {
        this.name = theName;
    }
    return Person1;
}());
// Employee 能够继承 Person
var Employee2 = /** @class */ (function (_super) {
    __extends(Employee2, _super);
    function Employee2(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee2.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee2;
}(Person1));
var howard1 = new Employee2("howard", "Sales");
//let john = new Person1("John"); // 错误： 'Person' 的构造函数是被保护的.
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit"; // 错误！ name 是只读的.
var Animal5 = /** @class */ (function () {
    function Animal5(name) {
        this.name = name;
    }
    Animal5.prototype.move = function (distanceInMeters) {
        console.log(this.name + " moved " + distanceInMeters);
    };
    return Animal5;
}());
var passcode = "secret passcode";
var Employee3 = /** @class */ (function () {
    function Employee3() {
    }
    Object.defineProperty(Employee3.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (passcode && passcode == "secret passcode") {
                this._fullName = newName;
            }
            else {
                console.log("Error: Unautorized update of employee!");
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee3;
}());
var employee3 = new Employee3();
employee3.fullName = "Bob Smith";
if (employee3.fullName) {
    alert(employee3.fullName);
}
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0); // 1x scale
var grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
var AbstractAnimal = /** @class */ (function () {
    function AbstractAnimal() {
    }
    AbstractAnimal.prototype.move = function () {
        console.log('roaming the earch...');
    };
    return AbstractAnimal;
}());
var AbstractDepartment = /** @class */ (function () {
    function AbstractDepartment(name) {
        this.name = name;
    }
    AbstractDepartment.prototype.printName = function () {
        console.log('Department name:' + this.name);
    };
    return AbstractDepartment;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log('The Accounting Department meets each Monday at 10am.');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log('Generating accounting reports...');
    };
    return AccountingDepartment;
}(AbstractDepartment));
var department; // 允许创建一个对抽象类型的引用
//department = new AbstractDepartment();  // 错误：不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
//department.generateReports();   // 错误：方法在声明的抽象类中不存在
var Greeter1 = /** @class */ (function () {
    function Greeter1() {
    }
    Greeter1.prototype.greet = function () {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter1.standardGreeting;
        }
    };
    Greeter1.standardGreeting = "Hello, there";
    return Greeter1;
}());
var greeter1;
greeter1 = new Greeter1();
console.log(greeter1.greet());
var greeterMaker = Greeter1;
greeterMaker.standardGreeting = "Hey there!";
var greeter2 = new greeterMaker();
console.log(greeter2.greet());
var Point1 = /** @class */ (function () {
    function Point1() {
    }
    return Point1;
}());
var point3d = { x: 1, y: 2, z: 3 };
//# sourceMappingURL=class.js.map