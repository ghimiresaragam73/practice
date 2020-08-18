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
            /* if(localStorage.getItem('remember')=='okay' && localStorage.getItem('token')){
                this.router.navigate(['/user']);
                console.log(localStorage.getItem('remember'))
              } */
        this.user = {
            username: '',
            password: ''
        }

    }

    /*  askMoney() {
         return new Promise((resolve, reject) => {
             setInterval(() => {
                 console.log('I am called')
                 resolve(15000);
             }, 1000)
         })
     }
 
     watchSherlockHolmes() {
         return Observable.create((observer) => {
             let i = 0;
             setInterval(() => {
                 observer.next('episode ' + ++i);
                 if (i == 4) {
                     observer.complete();
                 }
                 //observer.error('error');
                 //observer.complete('Completed');
             }, 1000);
         })
     } */

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
                        localStorage.setItem('Remeber', 'okay')
                    }
                    this.router.navigate(['/user']);
                },
                err => {
                    //if error /// send error data to message service show Error Method
                    this.msgService.showError(err);
                },
            )


        /* this.askMoney()
            .then((data) => {
                console.log('data in promise ',data);
            })
            .catch((err) => {
                console.log('error in promise ',err);
            })

        let dipesh=this.watchSherlockHolmes().subscribe(
            (success) => {
                console.log('Sherlock Holmes(Dipesh)', success);
                if(success =='episode 2'){
                    dipesh.unsubscribe();
                }
            },
            (err) => {
                console.log('Error in observable ', err);
            },
            (complete) => {
                console.log('Complete in observable ', complete);
            }
        )

        let milan= this.watchSherlockHolmes().subscribe(
            (success) => {
                console.log('Sherlock Holmes(Milan) ', success);
            },
            (err) => {
                console.log('Error in observable ', err);
            },
            (complete) => {
                console.log('Complete in observable ', complete);
            }
        ) */
        /*          this.submitting = true;
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
                 }, 2000); */
    }

    rememberMeChanged() {
        console.log('rember me clicked');
        this.rememberMe = !this.rememberMe;
    }
}


