import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerModule} from './customer/customer.module';
import {CustomerListComponent} from './customer/customer-list/customer-list.component';
import {CustomerEditComponent} from './customer/customer-edit/customer-edit.component';
import {CustomerCreateComponent} from './customer/customer-create/customer-create.component';
import {SoTietKiemListComponent} from './sotietkiem/so-tiet-kiem-list/so-tiet-kiem-list.component';
import {SoTietKiemEditComponent} from './sotietkiem/so-tiet-kiem-edit/so-tiet-kiem-edit.component';


const routes: Routes = [
  {path: '', component: SoTietKiemListComponent},
  {path: 'edit/:id', component: SoTietKiemEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
