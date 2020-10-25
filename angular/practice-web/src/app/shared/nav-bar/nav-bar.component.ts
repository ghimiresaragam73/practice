import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { MsgService } from '../services/msg.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
    constructor(public router: Router,
    public msgService: MsgService
  ) {

  }

  ngOnInit(): void {
  }

  logOut() {
    this.msgService.showSuccess('Logout Successful');
    localStorage.clear();
  }
}
