import { Component } from "@angular/core";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    user;
    submitting:boolean = false;
    constructor() {
        this.user = {
            username: '',
            password: '',
        }
    }
    login() {
        this.submitting = true;
        console.log('this.username>>', this.user);
        /* alert('I am called'); */
        setTimeout(() => {
            this.submitting = false;
        }, 3000);
    }
}

/* Forms Module */
/* Data Binding
-> communication between view and controller
==> 3 ways of data binding
1. Event binding -> any events that must call an expression and events are surrounded by (), (click,change);
2. Property Binding -> [] evaluates and perform the property eg [disabled]="abcd";
3. two way data binding -> [()] ngModel keyword must be used and value must be in controller as well.
 -> eg. [(ngModel)]="username"
 two way data binding is syncronization of data between view and controller
*/

/* State of form and form element
valid,invalid
pristine -> interaction nagarey ko state pristine -> the form or form element has not been interacted yet
dirty => the form or form element has been interacted
touched and untouched
touched-> focus out
untouched-> focused
*/