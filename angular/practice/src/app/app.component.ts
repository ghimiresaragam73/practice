import { Component } from '@angular/core'; //import is syntax es6 way of calling another file(require in es5)

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'practice';
}
 