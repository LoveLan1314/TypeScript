var Person2 = (function () {
    function Person2() {
    }
    return Person2;
}());
var p;
// Ok, because of structural typing
p = new Person2();
var xn;
// y's inferred type is { name: string; location: string; }
var y = { name: 'Alice', location: 'Seattle' };
xn = y;
var items = [1, 2, 3];
// Don't force these extra arguments
items.forEach(function (item, index, array) { return console.log(item); });
// Should be Ok!
items.forEach(function (item) { return console.log(item); });
var EventType;
(function (EventType) {
    EventType[EventType["Mouse"] = 0] = "Mouse";
    EventType[EventType["Keyboard"] = 1] = "Keyboard";
})(EventType || (EventType = {}));
function listenEvent(eventType, handler) {
    /*...*/
}
// Unsound, but useful and common
listenEvent(EventType.Mouse, function (e) { return console.log(e.x + ',' + e.y); });
// Undesirable alternatives in presence of soundness
listenEvent(EventType.Mouse, function (e) { return console.log(e.x +
    ',' + e.y); });
listenEvent(EventType.Mouse, (function (e) {
    return console.log(e.x + ',' + e.y);
}));
// Still disallowed (clear error). Type safety enforced for wholly 
// incompatible types
//listenEvent(EventType.Mouse, (e: number) => console.log(e));
function invokeLater(args, callback) {
    /* ... Invoke callback with 'args' ... */
}
// Unsound - invokeLater "might" provide any number of arguments
invokeLater([1, 2], function (x, y) { return console.log(x + ', ' + y); });
// Confusing (x and y are actually required) and undiscoverable
invokeLater([1, 2], function (x, y) { return console.log(x + ', ' + y); });
var Status;
(function (Status) {
    Status[Status["Ready"] = 0] = "Ready";
    Status[Status["Waiting"] = 1] = "Waiting";
})(Status || (Status = {}));
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var status1 = Status.Ready;
//status = Color.Green;   //error
var Animal7 = (function () {
    function Animal7(name, numFeet) {
    }
    return Animal7;
}());
var Size7 = (function () {
    function Size7(numFeet) {
    }
    return Size7;
}());
var a7;
var s7;
a7 = s7; //OK
s7 = a7; //OK
//# sourceMappingURL=type-compatibility.js.map