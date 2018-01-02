import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { TestAccessService } from '../service/test-access.service';
import { RunTestRequest } from '../model/run-tests-request.class';
import { Observable } from 'rxjs/Observable';
import { UseCase } from '../model/use-case.class';
import { UseCaseResult } from '../model/use-case-result.class';

@Component({
  selector: 'app-run-tests',
  templateUrl: './run-tests.component.html',
  providers: [ TestAccessService ],
  styleUrls: ['./run-tests.component.css']
})
export class RunTestsComponent implements OnInit, OnDestroy {
  private sub: any;
  testIds: String[] = new Array();
  baseURL: String;

  constructor(private testAccessService: TestAccessService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.baseURL = 'http://localhost:8081/brapi/v1/';
    this.sub = this.route.params.subscribe(params => {
       let testResultsBatchId = params['batchId'];
       if(testResultsBatchId){
         this.testAccessService.getTestResults(testResultsBatchId);
       }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setTestIds(ids: String[]){
    this.testIds = ids;
  }

  runTest(){
    let runReq: RunTestRequest = new RunTestRequest();
    runReq.testCaseIds = this.testIds;
    runReq.baseURL = this.baseURL;
    this.testAccessService.runTests(runReq).subscribe((batchId: string) => {
      this.location.go('runtests/' + batchId);
      this.testAccessService.getTestResults(batchId);
    },
    err => {
      console.log('something bad happened');
    })
  }
}
