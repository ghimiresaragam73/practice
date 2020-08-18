import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './products.routing';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AddProductComponent,
    EditProductComponent,
    ListProductComponent,
    SearchProductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ProductRoutingModule,
    SharedModule
  ]
})
export class ProductsModule { }
