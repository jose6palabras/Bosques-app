import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

import {Location} from './location'

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor( private httpClient: HttpClient) { console.log("working")}
  getData(){return this.httpClient.get<Location[]>('https://www.datos.gov.co/resource/xdk5-pm3f.json')}
}
