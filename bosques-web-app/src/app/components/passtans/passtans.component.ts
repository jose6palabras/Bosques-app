import { Component, Input, OnInit } from '@angular/core';
import { DataHomeService } from '../../data-home.service';

@Component({
  selector: 'app-passtans',
  templateUrl: './passtans.component.html',
  styleUrls: ['./passtans.component.css'],
  
})
export class PasstansComponent implements OnInit {
  @Input('url-service') urlService:string;
  ngOnInit(){
    this.dataService.getData(this.urlService).subscribe(data=>{
      this.post = data;
    });
  }
  

  post = [];
  

  

  constructor(private dataService: DataHomeService) { 
    
  }
  
  
  indexToShow = 0;
  goToNext(index){
    index = index + 1;
    this.indexToShow = index;    
  };
  goToBack(index){
    index = index - 1;
    this.indexToShow = index;
  };

}
