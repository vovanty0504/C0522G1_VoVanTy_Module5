import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import { ReactiveFormsModule} from "@angular/forms";
import {ProductListComponent} from "./product-list/product-list.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";


@NgModule({
  declarations: [ProductListComponent, CreateProductComponent, EditProductComponent, DeleteProductComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ProductRoutingModule,
  ]
})
export class ProductModule {
}
