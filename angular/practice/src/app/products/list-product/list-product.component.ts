import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.services';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/services/msg.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
products;
  constructor(
    public productService:ProductService,
    public router:Router,
    public msgService:MsgService
  ) { }

  ngOnInit(): void {
    this.productService.get()
    .subscribe(
      data=>{
        console.log(data);
      },
      error=>{
        this.msgService.showError(error)
      }
    )
  }

}
