import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MsgService } from './../../shared/services/msg.service'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    user;
    submitting: boolean = false;
    rememberMe: boolean = false;
    constructor(public router: Router,
        public authService: AuthService,
        public msgService: MsgService) {
        this.user = {
            username: '',
            password: '',
        }
        if (localStorage.getItem('remember') && localStorage.getItem('token')) {
            this.router.navigate(['/user']);
        }
    }

    login() {
        this.submitting = true;
        this.authService.login(this.user)
            .subscribe(
                (data: any) => {
                    console.log('data is >>', data);
                    this.msgService.showSuccess('Login Successful');
                    /* Store data in localstorage */
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    if (this.rememberMe) {
                        localStorage.setItem('remember', 'true');
                    }
                    this.router.navigate(['/user']);
                },
                err => {
                    console.log('error>>', err);
                    this.msgService.showError(err);
                }
            )
        /* console.log('this.username>>', this.user);
        setTimeout(() => {
            this.submitting = false;
        }, 3000);
        /* alert('I am called'); */
        this.submitting = false;
    }

    rememberMeChanged() {
        this.rememberMe = !this.rememberMe;
        console.log('remember me clicked ', this.rememberMe);
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