import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { TestAccessService } from '../service/test-access.service';
import { RunTestRequest } from '../model/run-tests-request.class';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-run-tests',
  templateUrl: './run-tests.component.html',
  providers: [ TestAccessService ],
  styleUrls: ['./run-tests.component.css']
})
export class RunTestsComponent implements OnInit, OnDestroy {
  id: String;
  private sub: any;
  testIds: String[];
  baseURL: String;
  testResultsBatchId: String;

  constructor(private testAccessService: TestAccessService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.baseURL = 'http://localhost:8081/brapi/v1/';
    this.sub = this.route.params.subscribe(params => {
       this.id = params['batchId'];
       console.log(this.id);
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setTestIds(ids){
    this.testIds = ids;
  }

  runTest(){
    console.log(this.testIds);
    let runReq: RunTestRequest = new RunTestRequest();
    runReq.testCaseIds = this.testIds;
    runReq.baseURL = this.baseURL;
    this.testAccessService.runTests(runReq).subscribe((batchId: string) => {
      this.location.go('runtests/' + batchId);
      this.testResultsBatchId = batchId;
      this.testAccessService.getTestResults(batchId);
    },
    err => {
      console.log('something bad happened');
    })
  }
}
