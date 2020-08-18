import { Component } from '@angular/core'; //import is syntax es6 way of calling another file(require in es5)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
  loggedIn: boolean = false;
  constructor() {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    }
  }
  isLoggedIn() {
    if (localStorage.getItem('token')) {
      return true;
    } 
    else {
      return false;
    }
  }
}
