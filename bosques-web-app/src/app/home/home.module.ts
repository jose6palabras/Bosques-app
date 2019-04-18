import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material.module'

import { HomeComponent } from './home/home.component';
import { BuyformComponent } from '../components/buyform/buyform.component';
import { SoldformComponent } from '../components/soldform/soldform.component';

@NgModule({
  declarations: [
    HomeComponent,
    BuyformComponent,
    SoldformComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule
  ]
})
export class HomeModule { }
