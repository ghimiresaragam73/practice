import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
name;
  constructor(
    public activeRoute:ActivatedRoute
  ) {
    console.log('token>>', localStorage.getItem('token'));
    console.log('user is>>', JSON.parse(localStorage.getItem('user')));
  }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(
      data=>{
        this.name=data.name;
      }
    )
  }

}
