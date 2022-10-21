import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CreateServiceComponent } from './create-service/create-service.component';
import { CustomerComponent } from './customer/customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { ContractComponent } from './contract/contract.component';
import { CreateContractComponent } from './create-contract/create-contract.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import {EditFacilityComponent} from "./edit-facility/edit-facility.component";
import { FacilityListComponent } from './facility-list/facility-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CreateServiceComponent,
    CustomerComponent,
    EditCustomerComponent,
    ContractComponent,
    CreateContractComponent,
    CreateCustomerComponent,
    EditFacilityComponent,
    FacilityListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
