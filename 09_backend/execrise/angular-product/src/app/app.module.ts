import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './product/product-list/product-list.component';
import {EditProductComponent} from './product/edit-product/edit-product.component';
import {DeleteProductComponent} from './product/delete-product/delete-product.component';
import {CreateProductComponent} from './product/create-product/create-product.component';
import {ReactiveFormsModule} from "@angular/forms";
import {CreateCategoryComponent} from './category/create-category/create-category.component';
import {EditCategoryComponent} from './category/edit-category/edit-category.component';
import {CategoryListComponent} from './category/category-list/category-list.component';
import {DeleteCategoryComponent} from './category/delete-category/delete-category.component';
import {HttpClientModule} from "@angular/common/http";
import {ProductModule} from "./product/product.module";

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    EditProductComponent,
    DeleteProductComponent,
    CreateProductComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    CategoryListComponent,
    DeleteCategoryComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
