import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { TestAccessService } from '../service/test-access.service';
import { UseCaseResult } from '../model/use-case-result.class';

@Component({
  selector: 'app-test-result-details',
  templateUrl: './test-result-details.component.html',
  providers: [ TestAccessService ],
  styleUrls: ['./test-result-details.component.css']
})
export class TestResultDetailsComponent implements OnInit {
  private sub: any;
  @Input() useCaseResult: UseCaseResult;
  useCaseResultIndex: number;

  constructor(private testAccessService: TestAccessService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log('made it');
    if (!this.useCaseResult) {
      this.sub = this.route.params.subscribe(params => {
        this.useCaseResultIndex = params['id'];
        let testResultsBatchId = params['batchId'];
        if (testResultsBatchId) {
          this.testAccessService.getTestResults(testResultsBatchId);
        }
      });
      this.testAccessService.getTestResultsSubject().subscribe((data: UseCaseResult[]) => {
        this.useCaseResult = data[this.useCaseResultIndex];
      });
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  parse(raw:string){
    return JSON.parse(raw);
  }

  back(){
    this.location.back();
  }
}
