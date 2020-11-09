import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MsgService } from 'src/app/shared/services/msg.service';
import { Product } from '../models/product.model';
import { ProductService } from '../services/products.service';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  submitting: boolean = false;
  product;
  categories = [];
  showName: boolean = false;
  allProducts = [];
  names = [];
  result: boolean = false;
  searchResult = [];
  constructor(
    public msgService: MsgService,
    public productService: ProductService,
    public router: Router
  ) {
    this.product = new Product({})
  }

  ngOnInit(): void {
    this.productService.get()
      .subscribe(
        (data: any) => {
          this.allProducts = data;
          data.forEach((item, i) => {
            if (this.categories.indexOf(item.category) == -1) {
              this.categories.push(item.category);
            }
          })
        },
        err => {
          this.msgService.showError(err);
        }
      )
  }

  search() {
    this.submitting = true;
    this.productService.search(this.product)
      .subscribe(
        (data: any) => {
          if (data.length) {
            this.result = true;
            this.searchResult = data;
            console.log('search data here>>>', data);
            this.submitting = false;
          } else {
            this.msgService.showInfo("No any product matched");
            this.submitting = false;
          }
        },
        err => {
          this.msgService.showError(err);
          this.submitting = false;
        }
      )
  }

  categoryChanged(value) {
    console.log('value is>>>', value);
    console.log('binding value is>>>', this.product.category);
    this.names = this.allProducts.filter((item, i) => {
      if (item.category == value) {
        return true;
      }
    });
    this.showName = true;
  }
}
