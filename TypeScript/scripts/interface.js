//function printLabel(labelledObj: { label: string }) {
//    console.log(labelledObj.label);
//}
function printLebel(labelledObj) {
    console.log(labelledObj.label);
}
var myObj = { size: 10, label: "Size 10 Object" };
printLebel(myObj);
function createSquare(config) {
    var newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var p1 = { x: 10, y: 20 };
//p1.x = 5;   // error!
var a = [1, 2, 3, 4];
var ro = a;
//ro[0] = 12; // error!
//ro.push(5); // error!
//ro.length = 100;    // error!
//a = ro; // error!
a = ro;
//let mySquare = createSquare({ colour: "red", width: 100 }); // error!
var squareOptions = { colour: "red", width: 100 };
var mySquare = createSquare(squareOptions);
//# sourceMappingURL=interface.js.map