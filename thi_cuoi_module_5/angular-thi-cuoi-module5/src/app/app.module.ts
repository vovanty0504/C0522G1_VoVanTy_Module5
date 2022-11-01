import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SoTietKiemListComponent } from './sotietkiem/so-tiet-kiem-list/so-tiet-kiem-list.component';
import { SoTietKiemEditComponent } from './sotietkiem/so-tiet-kiem-edit/so-tiet-kiem-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    SoTietKiemListComponent,
    SoTietKiemEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
