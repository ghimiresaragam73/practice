import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent implements OnInit {
 user;
  constructor() {
    console.log('token>>>', localStorage.getItem('token'));
    console.log('user is>>', JSON.parse(localStorage.getItem('user')));
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log('user is>>>>>',this.user);
  }

  ngOnInit(): void {
  }

}
