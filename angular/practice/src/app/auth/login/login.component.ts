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
    constructor(public router: Router,
        public authService: AuthService,
        public msgService: MsgService) {
        this.user = {
            username: '',
            password: ''
        }
    }

    askMoney() {
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
    }

    login() {
        this.msgService.showInfo('Login in progress');
        //console.log(this.authService.upper('hello'));
        this.authService.login(this.user)
            .subscribe(
                data => {
                    console.log('data is ', data);
                    this.msgService.showSuccess('Login Successful')
                },
                err => {
                    console.log('err is ', err);
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
}
