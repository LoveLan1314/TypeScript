namespace Symbols {
    let sym1 = Symbol();

    let sym2 = Symbol("key");

    let sym3 = Symbol("key");

    sym2 === sym3;  // false, symbols是唯一的

    let sym = Symbol();

    let obj = {
        [sym]: "value"
    };

    console.log(obj[sym]);  // "value"

    const getClassNameSymbol = Symbol();

    class C {
        [getClassNameSymbol]() {
            return "C";
        }
    }

    let c = new C();
    let className = c[getClassNameSymbol]();    // "C"

    let someArray = [1, "string", false];

    for (let entry of someArray) {
        console.log(entry); // 1, "string", false
    }

    let list = [4,5,6];

    for (let i in list) {
        console.log(i); // "0", "1", "2"
    }

    for (let i of list) {
        console.log(i); // "4", "5", "6"
    }

    let pets = new Set(["Cat", "Dog", "Hamster"]);
    //pets["species"] = "mammals";

    for (let pet in pets) {
        console.log(pet);   // "species"
    }

    for (let pet in pets) {
        console.log(pet);   // "Cat", "Dog", "Hamster"
    }

    let numbers = [1, 2, 3];
    for (let num of numbers) {
        console.log(num);
    }
}