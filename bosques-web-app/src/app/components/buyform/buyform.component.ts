import { Component, OnInit } from '@angular/core';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-buyform',
  templateUrl: './buyform.component.html',
  styleUrls: ['./buyform.component.css']
})
export class BuyformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'algo1'},
    {value: 'pizza-1', viewValue: 'algo2'},
    {value: 'tacos-2', viewValue: 'algo3'},
    {value: 'tacos-3', viewValue: 'algo4'}
  ];

}
