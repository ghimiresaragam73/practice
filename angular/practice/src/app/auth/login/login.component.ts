import { Component } from "@angular/core";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { MsgService } from './../../shared/services/msg.service';
//service is specific task performing file(class)
//services must be injected

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})

export class LoginComponent {
    user;
    submitting: boolean = false;
    rememberMe = false;
    constructor(public router: Router,
        public authService: AuthService,
        public msgService: MsgService,) {
/*             if(localStorage.getItem('remember')=='okay' && localStorage.getItem('token')){
                this.router.navigate(['/user']);
                console.log(localStorage.getItem('remember'))
              } */
        this.user = {
            username: '',
            password: ''
        }

    }

   

    login() {
        this.authService.login(this.user)
            .subscribe(
                (data: any) => {
                    console.log('data >> ', data);
                    this.msgService.showSuccess('Login Successful');
                    //store data in local storage
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    if (this.rememberMe) {
                        localStorage.setItem('remember', 'okay')
                    }

                    this.router.navigate(['/user']),{
                        queryParams:{
                            name:data.name
                        }
                    };
                },
                err => {
                    //if error /// send error data to message service show Error Method
                    this.msgService.showError(err);
                },
            )

    }

    rememberMeChanged() {
        console.log('rember me clicked');
        this.rememberMe = !this.rememberMe;
    }
}


