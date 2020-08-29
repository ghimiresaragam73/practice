import { Component, OnInit } from '@angular/core';
import { MsgService } from 'src/app/shared/services/msg.service';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.services';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  submitting: boolean = false;
  product;
  constructor(
    public msgService: MsgService,
    public router: Router,
    public productService: ProductService
  ) {
    this.product = new Product({});
  }

  ngOnInit(): void {
  }
  submit() {
    this.submitting = true;
    this.productService.add(this.product).subscribe(
      data => {
        this.msgService.showSuccess('Product Added Successfully');
        this.router.navigate(['/product/list'])
      },
      err => {
        this.submitting=false;
        this.msgService.showError(err);
      }
    )
  }

}
