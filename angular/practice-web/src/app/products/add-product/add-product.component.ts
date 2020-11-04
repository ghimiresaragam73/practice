import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/services/msg.service';
import { UploadService } from 'src/app/shared/services/upload.service';
import { environment } from 'src/environments/environment';
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
  filesToUpload = [];
  url:string;
  constructor(
    public router: Router,
    public msgService: MsgService,
    public productService: ProductService,
    public uploadService:UploadService
  ) {
    this.product = new Product({});
    this.url = environment.baseUrl +'/product';
  }

  ngOnInit(): void {
  }

  submit() {
    this.submitting = true;
    this.uploadService.upload(this.product, this.filesToUpload,"POST",this.url)
      .subscribe(
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

  fileChanged(ev) {
    // console.log('ev>>>',ev);
    this.filesToUpload = ev.target.files;
    // console.log('filestoupload>>>', this.filesToUpload);
  }
}
