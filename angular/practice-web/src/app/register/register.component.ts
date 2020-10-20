import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitting: boolean = false;
  user;
  constructor() {
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
    setTimeout(() => {
      this.submitting = false;
    }, 3000);
  }
}
