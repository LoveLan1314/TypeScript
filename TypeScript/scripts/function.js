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
function add(x, y) {
    return x + y;
}
//let myAdd = function (x: number, y: number): number { return x + y; }
var myAdd = function (x, y) { return x + y; };
function buildName(firstName, lastName) {
    return firstName + " " + lastName;
}
//let result1 = buildName("Bob");                 // error, too few parameters
//let result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters
var result3 = buildName("Bob", "Adams"); // ah, just right
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCradPicker: function () {
        var _this = this;
        // NOTE : the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pcikedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pcikedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicked = deck.createCradPicker();
var pickedCard = cardPicked();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
function f() {
    // make sure `this` is unusable in this stanalone function
}
var deck1 = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker1 = deck1.createCardPicker();
var pickedCard1 = cardPicker1();
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var Handler = (function () {
    function Handler() {
    }
    Handler.prototype.onClickBad = function (e) {
        // oops, used this here. using this callback would crash at runtime
        this.info = e.type;
    };
    return Handler;
}());
var h = new Handler();
var suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard2 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
var pickedCard3 = pickCard(15);
alert("card: " + pickedCard3.card + " of " + pickedCard3.suit);
//# sourceMappingURL=function.js.map