import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CategoryRoutingModule} from './category-routing.module';
import {CategoryListComponent} from "./category-list/category-list.component";
import {EditCategoryComponent} from "./edit-category/edit-category.component";
import {CreateCategoryComponent} from "./create-category/create-category.component";
import {DeleteCategoryComponent} from "./delete-category/delete-category.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [CategoryListComponent, EditCategoryComponent, CreateCategoryComponent, DeleteCategoryComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule
  ]
})
export class CategoryModule {
}
