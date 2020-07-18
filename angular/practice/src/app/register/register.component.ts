import { Component } from "@angular/core"

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    user;
    submitting: boolean = false
    constructor() {
        this.user = {
            name: '',
            emailaddress: '',
            username: '',
            password: '',
            dob: '',
            gender: '',
            phonenumber: ''
        }
    }
    register() {
        this.submitting = true;
        setTimeout(() => {
            alert('Registered');
            this.submitting = false;
            console.log('this.username', this.user.username);
        }, 5000);
    }
}