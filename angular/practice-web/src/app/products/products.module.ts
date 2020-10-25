import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './products.routing';



@NgModule({
  declarations: [
    AddProductComponent,
    ListProductComponent,
    EditProductComponent,
    SearchProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ProductRoutingModule
  ]
})
export class ProductsModule { }
