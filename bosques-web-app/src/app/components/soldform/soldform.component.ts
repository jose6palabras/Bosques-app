import { Component, OnInit } from '@angular/core';
import { LocationService } from '../../location.service'



export interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-soldform',
  templateUrl: './soldform.component.html',
  styleUrls: ['./soldform.component.css']
})
export class SoldformComponent implements OnInit {
  departamentos = [];
  municipios = [];
  sorted_deptos = [];
  full_data = [];

  selected(event) {
    let target = event.source.selected._element.nativeElement;
    let selectedData = {
      value: event.value,
      text: target.innerText.trim()
    };
    console.log(selectedData.text)
    this.searchingMuniciopios(selectedData.text)
    console.log(this.municipios.length)  
  }
  
  searching(item: string){
    var value = true
    for(let i of this.departamentos){
      if (item == i){
        value = false
        break
      }
      else{ value = true }      
    }
    return value
  }
  
  searchingMuniciopios(dpto: string){
    this.municipios.splice(0, this.municipios.length)
    for(var _i = 0; _i < this.full_data.length; _i++){
      if (dpto == this.full_data[_i]["departamento"]){
        this.municipios.push(this.full_data[_i]["municipio"])
      }
    }
  }
  constructor(private locationService: LocationService) { 
    this.locationService.getData().subscribe(
      data => {
        this.full_data = data;
        for(var _i = 0; _i < data.length; _i++){
          if (this.searching(data[_i].departamento)){
            this.departamentos.push(data[_i].departamento)
          }
        }
        this.sorted_deptos = this.departamentos.sort();      
      }
    );  
  }

  ngOnInit() {
    
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  
}