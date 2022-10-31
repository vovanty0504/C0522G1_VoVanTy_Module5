import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {EditFacilityComponent} from "./edit-facility/edit-facility.component";
import {CreateFacilityComponent} from "./create-facility/create-facility.component";
import {FacilityListComponent} from "./facility-list/facility-list.component";


const routes: Routes = [
  {path: 'list', component: FacilityListComponent},
  {path: 'edit/:id', component: EditFacilityComponent},
  {path: 'create', component: CreateFacilityComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule {
}
