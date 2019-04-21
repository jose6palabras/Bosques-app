import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {PostHome} from './PostHome'

@Injectable({
  providedIn: 'root'
})
export class DataResultsService {

  constructor(private http: HttpClient) {}
  getData(dataUrl: string){
    return this.http.get<PostHome[]>(dataUrl);
  }  
}
