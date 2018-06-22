//function sayHello() {
//    const compiler = (document.getElementById("compiler") as HTMLInputElement).value;
//    const framework = (document.getElementById("framework") as HTMLInputElement).value;
//    return `Hello from ${compiler} and ${framework}!`;
//}

import { Component } from "angular2/core";
import { MyModel } from "./model";

@Component({
    selector: `my-app`,
    template: `<div>Hello from1 {{getCompiler()}}</div>`
})
export class MyApp {
    model = new MyModel();
    getCompiler() {
        return this.model.compiler;
    }
}