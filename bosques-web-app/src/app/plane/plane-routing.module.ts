import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PlaneComponent} from './plane/plane.component'

const routes: Routes = [
  {
    path: '',
    component: PlaneComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaneRoutingModule { }
