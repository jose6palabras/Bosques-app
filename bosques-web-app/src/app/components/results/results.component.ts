import { Component, OnInit, Input } from '@angular/core';
import {DataResultsService} from '../../data-results.service'


@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(private dataResults: DataResultsService) { }

  post = [];
  @Input('url-service') urlService:string;
  ngOnInit() {
    this.dataResults.getData(this.urlService).subscribe(data=>{
      this.post = data;
    });
    
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
