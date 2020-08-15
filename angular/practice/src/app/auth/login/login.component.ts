import { Component } from "@angular/core";
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr';
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
    constructor(public router: Router,
        public toastr: ToastrService) {
        this.user = {
            username: '',
            password: ''
        }
    }
    login() {
        this.submitting = true;
        console.log('this.username>>', this.user.username);
        console.log('this.password>>', this.user.password);
        this.toastr.success('Login Successful')
        setTimeout(() => {
            this.submitting = false;
            //asssume login is success now redirect to profile or dashboard
            this.router.navigate(['/user'],{
                queryParams:{
                    name:'ace', addr:'bkt' ,
                }
            });
            this.toastr.info('You must be redirected to dashboard')
        }, 2000);
    }
}
