import { Component } from "@angular/core";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    user;
    submitting: boolean = false;
    constructor() {
        this.user = {
            username: '',
            password: ''
        }
    }
    login() {
        this.submitting = true;
        console.log('this.username>>', this.user.username);
        console.log('this.password>>', this.user.password);
        setTimeout(() => {
            this.submitting = false;
            this.user.username = 'hello';
            this.user.password = 'hello';
        }, 5000);
    }
}
