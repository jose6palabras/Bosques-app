import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlaneRoutingModule } from './plane-routing.module';
import { PlaneComponent } from './plane/plane.component';

@NgModule({
  declarations: [PlaneComponent],
  imports: [
    CommonModule,
    PlaneRoutingModule
  ]
})
export class PlaneModule { }
