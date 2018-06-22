"use strict";
//function sayHello() {
//    const compiler = (document.getElementById("compiler") as HTMLInputElement).value;
//    const framework = (document.getElementById("framework") as HTMLInputElement).value;
//    return `Hello from ${compiler} and ${framework}!`;
//}
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("angular2/core");
var model_1 = require("./model");
var MyApp = (function () {
    function MyApp() {
        this.model = new model_1.MyModel();
    }
    MyApp.prototype.getCompiler = function () {
        return this.model.compiler;
    };
    return MyApp;
}());
MyApp = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "<div>Hello from1 {{getCompiler()}}</div>"
    })
], MyApp);
exports.MyApp = MyApp;
//# sourceMappingURL=app.js.map