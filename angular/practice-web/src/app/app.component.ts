import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* Controller */
  title = 'practice-web';
  constructor() {
   
  }
  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }
}

/* Meta data of component
Selector => part of component decorator which will carry entire component => eg. app-root => will carry entire app component with meta defined on it
=> selector are used as html element
*/