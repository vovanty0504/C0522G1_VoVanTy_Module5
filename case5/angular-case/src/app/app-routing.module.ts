import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";

import {CustomerModule} from "./customer/customer.module";
import {ContractModule} from "./contract/contract.module";
import {FacilityModule} from "./facility/facility.module";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'customer', loadChildren: () => CustomerModule},
  {path: 'contract', loadChildren: () => ContractModule},
  {path: 'facility', loadChildren: () => FacilityModule},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
