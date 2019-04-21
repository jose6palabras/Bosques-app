import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module'
import { HttpClientModule } from '@angular/common/http'
import { PlaneRoutingModule } from './plane-routing.module';

import { PlaneComponent } from './plane/plane.component';
import { ResultsComponent } from '../components/results/results.component'


import {DataResultsService} from '../data-results.service';


@NgModule({
  declarations: [
    PlaneComponent,
    ResultsComponent,
  ],
  imports: [
    CommonModule,
    PlaneRoutingModule,
    MaterialModule,
    HttpClientModule,
  ],
  providers:[
    DataResultsService,
  ]
})
export class PlaneModule { }
