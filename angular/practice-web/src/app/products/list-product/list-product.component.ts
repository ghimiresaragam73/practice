import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/services/msg.service';
import { environment } from 'src/environments/environment';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {
  products;
  loading: boolean = true;
  imageUrl: string;
  @Input() data;
  constructor(
    public msgService: MsgService,
    public productService: ProductService,
    public router: Router
  ) {
    this.imageUrl = environment.imageUrl;
  }

  ngOnInit(): void {
    if (!this.data) {
      this.productService.get().subscribe(
        data => {
          this.products = data;
          this.loading=false;
        },
        error => {
          this.msgService.showError(error);
        }
      )
    }else{
      this.products= this.data;
      this.loading=false;
    }
  }


  removeProduct(id, i) {
    let removeConfirm = confirm("Are you sure to delete?");
    if (removeConfirm) {
      console.log('remove from database');
      this.productService.remove(id)
        .subscribe(
          data => {
            this.msgService.showSuccess('Product Removed')
            this.products.splice(i, 1);
          },
          error => {
            this.msgService.showError(error);
          }
        )
    }
  }


}
