import { NgModule } from '@angular/core';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './products.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/products.service';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AddProductComponent,
    ListProductComponent,
    EditProductComponent,
    SearchProductComponent
  ],
  imports: [
    SharedModule,
    FormsModule,
    ProductRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
