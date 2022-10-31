import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {FacilityRoutingModule} from './facility-routing.module';
import {FacilityListComponent} from "./facility-list/facility-list.component";
import {EditFacilityComponent} from "./edit-facility/edit-facility.component";
import {CreateFacilityComponent} from "./create-facility/create-facility.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [FacilityListComponent, FacilityListComponent,
    EditFacilityComponent, CreateFacilityComponent],
  imports: [
    CommonModule,
    FacilityRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class FacilityModule {
}
