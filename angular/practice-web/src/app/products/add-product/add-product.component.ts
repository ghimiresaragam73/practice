import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/services/msg.service';
import { Product } from '../models/product.model';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  submitting: boolean = false;
  product;
  constructor(
    public router: Router,
    public msgService: MsgService,
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
        this.router.navigate(['/product/list']);
      },
      error => {
        this.submitting = false;
        this.msgService.showError(error);
      }
    )
  }

}
