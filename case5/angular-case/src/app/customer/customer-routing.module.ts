import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";


const routes: Routes = [
  {path:'customer/list',component:CustomerListComponent},
  {path:'customer/add',component:CreateCustomerComponent},
  {path:'customer/:idUpdate',component:EditCustomerComponent},
  {path:'customer/del/:id',component:EditCustomerComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
