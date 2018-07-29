class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

let greeter = new Greeter("world");

class Animal1 {
    move(distanceInMeters: number = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog1 extends Animal1 {
    bark() {
        console.log(`Woof! Woof!`);
    }
}

const dog = new Dog1();
dog.bark();
dog.move(10);
dog.bark();

class Animal2 {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal2 {
    constructor(name: string) { super(name); }
    move(distanceInMeters: number = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal2 {
    constructor(name: string) { super(name); }
    move(distanceInMeters: number = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal2 = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

class Animal3 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

//new Animal3("Cat").name;    // 错误：'name'是私有的

class Animal4 {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

class Rhino extends Animal4 {
    constructor() { super("Rhino"); }
}

class Employee {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}

let animal4 = new Animal4("Goat");
let rhino = new Rhino();
let employee = new Employee("Bob");

animal4 = rhino;
//animal4 = employee; // 错误：Animal 与 Employee 不兼容.

class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee1 extends Person {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee1("Howard", "Sales");
console.log(howard.getElevatorPitch());
//console.log(howard.name);   // 错误

class Person1 {
    protected name: string;
    protected constructor(theName: string) { this.name = theName; }
}

// Employee 能够继承 Person
class Employee2 extends Person1 {
    private department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard1 = new Employee2("howard", "Sales");
//let john = new Person1("John"); // 错误： 'Person' 的构造函数是被保护的.

class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor(theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
//dad.name = "Man with the 3-piece suit"; // 错误！ name 是只读的.

class Animal5 {
    constructor(private name: string) { }
    move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}`);
    }
}

let passcode = "secret passcode";

class Employee3 {
    private _fullName: string;

    get fullName(): string {
        return this._fullName;
    }

    set fullName(newName: string) {
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unautorized update of employee!");
        }
    }
}

let employee3 = new Employee3();
employee3.fullName = "Bob Smith";
if (employee3.fullName) {
    alert(employee3.fullName);
}

class Grid {
    static origin = { x: 0, y: 0 };
    calculateDistanceFromOrigin(point: { x: number; y: number; }) {
        let xDist = (point.x - Grid.origin.x);
        let yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
    constructor(public scale: number) { }
}

let grid1 = new Grid(1.0);  // 1x scale
let grid2 = new Grid(5.0);  // 5x scale

console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));

abstract class AbstractAnimal {
    abstract makeSound(): void;
    move(): void {
        console.log('roaming the earch...');
    }
}


abstract class AbstractDepartment {

    constructor(public name: string) {

    }

    printName(): void {
        console.log('Department name:' + this.name);
    }

    abstract printMeeting(): void;  // 必须在派生类中实现
}

class AccountingDepartment extends AbstractDepartment {

    constructor() {
        super('Accounting and Auditing');   // 在派生类的构造函数中必须调用 super()
    }

    printMeeting(): void {
        console.log('The Accounting Department meets each Monday at 10am.');
    }

    generateReports(): void {
        console.log('Generating accounting reports...');
    }
}

let department: AbstractDepartment; // 允许创建一个对抽象类型的引用
//department = new AbstractDepartment();  // 错误：不能创建一个抽象类的实例
department = new AccountingDepartment();    // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
//department.generateReports();   // 错误：方法在声明的抽象类中不存在

class Greeter1 {
    static standardGreeting = "Hello, there";
    greeting: string;
    greet() {
        if (this.greeting) {
            return "Hello, " + this.greeting;
        }
        else {
            return Greeter1.standardGreeting;
        }
    }
}

let greeter1: Greeter1;
greeter1 = new Greeter1();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter1 = Greeter1;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter1 = new greeterMaker();
console.log(greeter2.greet());

class Point1 {
    x: number;
    y: number;
}

interface Point3d extends Point1 {
    z: number;
}

let point3d: Point3d = { x: 1, y: 2, z: 3 };