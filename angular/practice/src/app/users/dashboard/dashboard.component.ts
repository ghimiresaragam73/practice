import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() {
    console.log('token>>', localStorage.getItem('token'));
    console.log('user is>>', JSON.parse(localStorage.getItem('user')));
  }

  ngOnInit(): void {
  }

}
