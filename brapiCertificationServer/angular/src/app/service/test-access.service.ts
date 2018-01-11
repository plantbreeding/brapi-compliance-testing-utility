import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs/Rx';
import { AuthHttp } from 'angular2-jwt';
import { Response } from '@angular/http';

import { RunTestRequest } from '../model/run-tests-request.class';
import { UseCaseResult } from '../model/use-case-result.class';
import { UseCase } from '../model/use-case.class';
import { CallDefinition } from '../model/call-defintion';
import { UseCaseResultList } from '../model/use-case-result-list.class';
import { AlertService } from './alert.service';

@Injectable()
export class TestAccessService {
  server: string = 'http://localhost:8081/';
  resultsSubject: Subject<UseCaseResult[]> = new Subject();
  private subscription: Subscription;

  constructor(private http: AuthHttp, private alertService: AlertService) { }

  runTests(req: RunTestRequest): Observable<string> {
    return this.http.post(this.server + 'runtest', req).map(this.getStringBody);
  }

  getTestResults(batchId: string) {
    this.subscription = Observable.timer(0, 1000).switchMap(val => {
      return this.http.get(this.server + 'testresults/' + batchId).map(this.getJsonBody);
    }).subscribe((data: UseCaseResultList) => {
      if (data) {
        this.resultsSubject.next(data.results);
        if (data.complete >= data.total) {
          this.subscription.unsubscribe();
        }
      }
    }, err => {
      this.alertService.handleHTTPError(err);
    });
  }

  getAllTestSummaries(): Observable<UseCase[]> {
    return this.http.get(this.server + 'tests').map(this.getJsonBody);
  }

  getTestResultsSubject(): Subject<UseCaseResult[]> {
    return this.resultsSubject;
  }

  getTest(id: string): Observable<UseCase> {
    return this.http.get(this.server + 'test/' + id).map(this.getJsonBody);
  }

  saveTest(useCase: UseCase): Observable<string> {
    return this.http.post(this.server + 'test', useCase).map(this.getStringBody);
  }

  deleteUseCase(id: string) {
    return this.http.delete(this.server + 'test/' + id);
  }

  getCallDefinitions(): Observable<CallDefinition[]> {
    return this.http.get(this.server + 'calls').map(this.getJsonBody);
  }

  getJsonBody(res: Response) {
    if (res.text()) {
      return res.json();
    } else {
      return null;
    }
  }

  getStringBody(res: Response) {
    return res.text();
  }
}
