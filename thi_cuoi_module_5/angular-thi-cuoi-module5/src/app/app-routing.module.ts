import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SoTietKiemListComponent} from './sotietkiem/so-tiet-kiem-list/so-tiet-kiem-list.component';
import {SoTietKiemEditComponent} from './sotietkiem/so-tiet-kiem-edit/so-tiet-kiem-edit.component';


const routes: Routes = [
  {path: '', component: SoTietKiemListComponent},
  {path: 'edit/:id', component: SoTietKiemEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
