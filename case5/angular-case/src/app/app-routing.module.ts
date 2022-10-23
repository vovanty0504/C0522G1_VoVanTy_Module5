import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CustomerComponent} from "./customer/customer.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";
import {FacilityListComponent} from "./facility-list/facility-list.component";
import {FacilityComponent} from "./facility/facility.component";
import {EditFacilityComponent} from "./edit-facility/edit-facility.component";
import {ContractComponent} from "./contract/contract.component";
import {CreateContractComponent} from "./create-contract/create-contract.component";
import {CreateFacilityComponent} from "./create-facility/create-facility.component";


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'customer/list', component: CustomerComponent},
  {path:'customer/create', component: CreateCustomerComponent},
  {path:'customer/edit/:id', component: EditCustomerComponent},
  {path:'facility/list', component: FacilityListComponent},
  {path:'facility', component: FacilityComponent},
  {path:'facility/edit', component: EditFacilityComponent},
  {path:'facility/create', component: CreateFacilityComponent},
  {path:'contract/list', component: ContractComponent},
  {path:'contract/create', component: CreateContractComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
