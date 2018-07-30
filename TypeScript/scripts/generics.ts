//function identity(arg: number): number {
//    return arg;
//}

//function identity(arg: any): any {
//    return arg;
//}

function identity<T>(arg: T): T {
    return arg;
}

//let output = identity<string>("myString");  // type of output will be 'string'

let output = identity("myString");  // type of output will be 'string'

function loggingIdentity<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

function loggingIdentity1<T>(arg: Array<T>): Array<T> {
    console.log(arg.length);    // Array has a .length, so no more error
    return arg;
}

let myIdentity: <T>(arg: T) => T = identity;

let myIdentity1: { <T>(arg: T): T } = identity;

interface GenericIdentityFn {
    <T>(arg: T): T;
}

let myIdentity2: GenericIdentityFn = identity;

interface GenericIdentityFn1<T> {
    (arg: T): T;
}

let myIndentity3: GenericIdentityFn1<number> = identity;

class GenericNumber<T>{
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) { return x + y; }

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) { return x + y; }

alert(stringNumeric.add(stringNumeric.zeroValue, "test"));

interface Lengthwise {
    length: number;
}

function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length);    // Now we know it has a .length property, so no more error
    return arg;
}

//loggingIdentity2(3);    // Error, number doesn't have a .length property
loggingIdentity2({ length: 10, value: 3 });

function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a");    // okay
//getProperty(x, "m");    // error: Argument of type 'm' isn't assign able to 'a'|'b'|'c'|'d'.

function create<T>(c: { new (): T; }): T {
    return new c();
}

class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal6 {
    numLegs: number;
}

class Bee extends Animal6 {
    keeper: BeeKeeper;
}

class Lion extends Animal6 {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal6>(c: new () => A): A {
    return new c();
}

createInstance(Lion).keeper.nametag;    // typechecks!
createInstance(Bee).keeper.hasMask;     // typechecks!