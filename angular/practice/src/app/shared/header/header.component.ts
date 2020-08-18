import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgService } from '../services/msg.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router:Router,
    public msgService:MsgService
  ) { }

  ngOnInit(): void {
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

}
