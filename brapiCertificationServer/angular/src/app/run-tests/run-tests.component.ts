import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { TestAccessService } from '../service/test-access.service';
import { RunTestRequest } from '../model/run-tests-request.class';
import { Observable } from 'rxjs/Observable';
import { UseCase } from '../model/use-case.class';
import { UseCaseResult } from '../model/use-case-result.class';
import { AlertService } from '../service/alert.service';
import { BaseUrl } from '../model/baseURL.class';

@Component({
  selector: 'app-run-tests',
  templateUrl: './run-tests.component.html',
  providers: [TestAccessService, AlertService],
  styleUrls: ['./run-tests.component.css']
})
export class RunTestsComponent implements OnInit, OnDestroy {
  private sub: any;
  testIds: String[] = new Array();
  baseURLs: BaseUrl[] = new Array();
  numberOfServers: number;

  constructor(private testAccessService: TestAccessService, private location: Location, private route: ActivatedRoute, private alertService: AlertService) { }

  ngOnInit() {
    this.baseURLs.push(new BaseUrl('https://test-server.brapi.org/brapi/v1'));
    this.sub = this.route.params.subscribe(params => {
      let testResultsBatchId = params['batchId'];
      if (testResultsBatchId) {
        this.testAccessService.getTestResults(testResultsBatchId);
      }
    });
    this.testAccessService.getTestResultsSubject().subscribe((data:UseCaseResult[]) =>{
      if(data && data[0]){
        //this.baseURLs = data[0].baseURLs;
      }
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  setTestIds(ids: String[]) {
    this.testIds = ids;
  }

  setNumberOfServers(num: number){
    console.log(num);
    while(num < this.baseURLs.length && this.baseURLs.length != 0){
      this.baseURLs.pop();
    }
    while(num > this.baseURLs.length && this.baseURLs.length <= 10){
      this.baseURLs.push(new BaseUrl('https://test-server.brapi.org/brapi/v1'));
    }
  }

  runTest() {
    let runReq: RunTestRequest = new RunTestRequest();
    runReq.testCaseIds = this.testIds;
    runReq.baseURLs = this.baseURLs.map((url) => {return url.baseURLString});
    this.testAccessService.runTests(runReq).subscribe((batchId: string) => {
      this.location.go('runtests/' + batchId);
      this.testAccessService.getTestResults(batchId);
    }, err => {
      this.alertService.handleHTTPError(err);
    })
  }
}
