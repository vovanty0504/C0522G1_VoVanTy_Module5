import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import {RouterModule} from '@angular/router';
import {CustomerRoutingModule} from './customer-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [CustomerEditComponent, CustomerListComponent, CustomerCreateComponent],
  imports: [
    CommonModule,
    RouterModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule { }
