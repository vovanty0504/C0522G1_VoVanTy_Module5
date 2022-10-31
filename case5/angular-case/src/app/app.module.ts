import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FooterComponent} from './footer/footer.component';
import {HeaderComponent} from './header/header.component';
import {HomeComponent} from './home/home.component';
import {CreateContractComponent} from './contract/create-contract/create-contract.component';
import {EditFacilityComponent} from "./facility/edit-facility/edit-facility.component";
import {FacilityListComponent} from './facility/facility-list/facility-list.component';
import {CreateFacilityComponent} from './facility/create-facility/create-facility.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ContractListComponent} from './contract/contract-list/contract-list.component';
import {HttpClientModule} from "@angular/common/http";
import {CustomerModule} from "./customer/customer.module";
import {FacilityModule} from "./facility/facility.module";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomerModule,
    FacilityModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
