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
    constructor(theName: string){}
}