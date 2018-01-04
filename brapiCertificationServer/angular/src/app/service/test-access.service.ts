import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs/Rx';

import { RunTestRequest } from '../model/run-tests-request.class';
import { UseCaseResult } from '../model/use-case-result.class';
import { UseCase } from '../model/use-case.class';
import { CallDefinition } from '../model/call-defintion';
import { UseCaseResultList } from '../model/use-case-result-list.class';

@Injectable()
export class TestAccessService {
  server: string = 'http://localhost:8080/';
  resultsSubject: Subject<UseCaseResult[]> = new Subject();
  private subscription: Subscription;

  constructor(private http: HttpClient) { }

  runTests(req: RunTestRequest): Observable<String> {
    return this.http.post<String>(this.server + 'runtest', req);
  }

  getTestResults(batchId: string) {
    this.subscription = Observable.timer(0, 1000).switchMap(val => {
      return this.http.get<UseCaseResultList>(this.server + 'testresults/' + batchId);
    }).subscribe((data: UseCaseResultList) => {
      if (data) {
        this.resultsSubject.next(data.results);
        console.log(data);
        if (data.complete >= data.total) {
          this.subscription.unsubscribe();
        }
      }
    });
  }

  getAllTestSummaries(): Observable<UseCase[]> {
    return this.http.get<UseCase[]>(this.server + 'tests');
  }

  getTestDetails(): UseCase {
    return;
  }

  getTestResultsSubject(): Subject<UseCaseResult[]> {
    return this.resultsSubject;
  }

  getTest(id: string): Observable<UseCase> {
    return this.http.get<UseCase>(this.server + 'test/' + id);
  }

  saveTest(useCase: UseCase): Observable<String> {
    return this.http.post<String>(this.server + 'test', useCase);
  }

  getCallDefinitions(): Observable<CallDefinition[]> {
    return this.http.get<CallDefinition[]>(this.server + 'calls');
  }
}
