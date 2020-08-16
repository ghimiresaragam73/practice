import { Component } from "@angular/core"
import { AuthService } from '../services/auth.service';
import { MsgService } from 'src/app/shared/services/msg.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})

export class RegisterComponent {
    user;
    submitting: boolean = false
    constructor(
        public authService: AuthService,
        public msgService: MsgService,
        public router: Router
    ) {
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
        this.authService.register(this.user)
            .subscribe(
                data => {
                    this.msgService.showSuccess('Registraion Successful');
                    this.router.navigate(['/auth/login']);
                },
                err => {
                    this.msgService.showError(err);
                }
            ) 
    }
}