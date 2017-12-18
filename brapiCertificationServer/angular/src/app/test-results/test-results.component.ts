import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { TestAccessService } from '../service/test-access.service';
import { UseCaseResult } from '../model/use-case-result.class';

@Component({
  selector: 'app-test-results',
  templateUrl: './test-results.component.html',
  styleUrls: ['./test-results.component.css']
})
export class TestResultsComponent implements OnInit {

  resultsLog: string;
  results:UseCaseResult[];
  selectedTabIndex: number;

  constructor(private testAccessService: TestAccessService) { }

  ngOnInit() {
    this.selectedTabIndex = 0;
    this.resultsLog = 'TEST LOG\n'
    this.testAccessService.getTestResultsSubject().subscribe((data:UseCaseResult[]) =>{
      this.results = data;
      for(let result of data){
        for(let callResult of result.results){
          this.resultsLog = this.resultsLog.concat(callResult.errorMsg, '\n');
        }
      }
    })
  }

  selectTab(index:number){
    this.selectedTabIndex = index;
  }
  selectedTab(index:number):boolean{
    return this.selectedTabIndex == index;
  }

}
