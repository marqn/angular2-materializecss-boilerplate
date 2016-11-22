import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: '<h1>Hello world!</h1>' +
    '<a class="waves-effect waves-light btn">buttonTitle</a>'
})
export class AppComponent {
    buttonTitle:string = "click me";
}