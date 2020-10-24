import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/services/msg.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitting: boolean = false;
  user;
  constructor(
    public authService: AuthService,
    public msgService: MsgService,
    public router: Router
  ) {
    this.user = {
      name: '',
      address: '',
      email: '',
      username: '',
      password: '',
      phone: '',
      dob: ''
    }
  }

  ngOnInit(): void {
  }
  register() {
    this.submitting = true;
    this.authService.register(this.user)
      .subscribe(
        data => {
          this.msgService.showSuccess('Register Successful');
          this.router.navigate(['/auth/login']);
        },
        err => {
          this.msgService.showError(err);
        }
      )
    this.submitting = false;
  }
}
