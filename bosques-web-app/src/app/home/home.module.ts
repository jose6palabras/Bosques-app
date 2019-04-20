import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MaterialModule } from '../material.module';
import {HttpClientModule} from '@angular/common/http';

import { HomeComponent } from './home/home.component';
import { BuyformComponent } from '../components/buyform/buyform.component';
import { SoldformComponent } from '../components/soldform/soldform.component';
import { PasstansComponent } from '../components/passtans/passtans.component'
import { FooterComponent } from '../components/footer/footer.component'

import { DataHomeService } from '../data-home.service'

@NgModule({
  declarations: [
    HomeComponent,
    BuyformComponent,
    SoldformComponent,
    PasstansComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    DataHomeService
  ]
})
export class HomeModule { }
