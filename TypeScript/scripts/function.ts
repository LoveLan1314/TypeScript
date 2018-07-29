//// Named function
//function add(x, y) {
//    return x + y;
//}

//// Anonymous function
//let myAdd = function (x, y) { return x + y; }

//let z = 100;

//function addToZ(x, y) {
//    return x + y + z;
//}

function add(x: number, y: number): number {
    return x + y;
}

//let myAdd = function (x: number, y: number): number { return x + y; }

let myAdd: (x: number, y: number) => number =
    function (x: number, y: number): number { return x + y; }

function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

//let result1 = buildName("Bob");                 // error, too few parameters
//let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
let result3 = buildName("Bob", "Adams");          // ah, just right

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCradPicker: function () {
        // NOTE : the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pcikedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pcikedSuit], card: pickedCard % 13 };
        }
    }
}

let cardPicked = deck.createCradPicker();
let pickedCard = cardPicked();

alert("card: " + pickedCard.card + " of " + pickedCard.suit);

function f(this: void) {
    // make sure `this` is unusable in this stanalone function
}

interface Card {
    suit: string;
    card: number;
}
interface Deck {
    suits: string[];
    cards: number[];
    createCardPicker(this: Deck): () => Card;
}
let deck1: Deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function (this: Deck) {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}

let cardPicker1 = deck1.createCardPicker();
let pickedCard1 = cardPicker1();

alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

class Handler {
    info: string;
    onClickBad(this: Handler, e: Event) {
        // oops, used this here. using this callback would crash at runtime
        this.info = e.type;
    }
}
let h = new Handler();


let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x: { suit: string; card: number; }[]): number;
function pickCard(x: number): { suit: string; card: number; };
function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];

let pickedCard2 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

let pickedCard3 = pickCard(15);
alert("card: " + pickedCard3.card + " of " + pickedCard3.suit);