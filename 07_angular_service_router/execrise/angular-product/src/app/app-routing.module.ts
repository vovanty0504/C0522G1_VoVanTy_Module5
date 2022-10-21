import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {CreateProductComponent} from "./create-product/create-product.component";
import {EditProductComponent} from "./edit-product/edit-product.component";
import {DeleteProductComponent} from "./delete-product/delete-product.component";


const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'product/create', component: CreateProductComponent},
  {path: 'edit/:id', component: EditProductComponent},
  {path: 'delete/:id', component: DeleteProductComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
