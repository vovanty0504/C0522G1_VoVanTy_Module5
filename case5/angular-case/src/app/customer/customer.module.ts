import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import {CustomerListComponent} from "./customer-list/customer-list.component";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";
import {CreateCustomerComponent} from "./create-customer/create-customer.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [CustomerListComponent,EditCustomerComponent,CreateCustomerComponent],
    imports: [
        CommonModule,
        CustomerRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        NgbPaginationModule
    ]
})
export class CustomerModule { }
