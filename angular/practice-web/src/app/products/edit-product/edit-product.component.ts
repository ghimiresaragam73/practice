import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MsgService } from 'src/app/shared/services/msg.service';
import { environment } from 'src/environments/environment';
import { Product } from '../models/product.model';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productId;
  product;
  imageUrl: string;
  submitting: boolean = false;
  loading: boolean = false;
  uploadArray = [];
  constructor(
    public msgService: MsgService,
    public productService: ProductService,
    public router: Router,
    public activeRoute: ActivatedRoute
  ) {
    this.imageUrl = environment.imageUrl;
  }

  ngOnInit(): void {
    this.loading = true;
    this.productId = this.activeRoute.snapshot.params['id'];
    this.productService.getById(this.productId)
      .subscribe(
        (data: any) => {
          this.loading = false;
          console.log('data is here>>', data);
          this.product = data;
          this.product.tags = data.tags.join(',');
        },
        error => {
          this.loading = false;
          this.msgService.showError(error);
        }
      )
  }
  edit() {
    this.submitting = true
    this.productService.upload(this.product, this.uploadArray,'PUT')
      .subscribe(
        data => {
          this.msgService.showSuccess('Edit Successful');
          this.router.navigate(['/product/list']);
          this.submitting = false;
        },
        error => {
          this.msgService.showError(error);
          this.submitting = false;
        }
      )
  }

  fileChanged(ev) {
    this.uploadArray = ev.target.files;
  }

}
