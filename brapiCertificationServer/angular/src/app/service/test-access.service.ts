import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, Subject, Subscription} from 'rxjs/Rx';

import { RunTestRequest } from '../model/run-tests-request.class';
import { UseCaseResult } from '../model/use-case-result.class';
import { UseCase } from '../model/use-case.class';

@Injectable()
export class TestAccessService {

  resultsSubject: Subject<UseCaseResult[]> = new Subject();
  private subscription: Subscription;

  constructor(private http: HttpClient) { }

  runTests(req: RunTestRequest):Observable<String>{
    return this.http.post<String>('http://localhost:8080/runtest', req);
  }

  getTestResults(batchId: string){
    this.subscription = Observable.interval(1000).switchMap(val => {
      return this.http.get<UseCaseResult[]>('http://localhost:8080/testresults/' + batchId);
    }).subscribe((data:UseCaseResult[])=>{
      console.log(data);
      this.resultsSubject.next(data);
      this.subscription.unsubscribe();
    });
  }

  getAllTestSummaries(): Observable<UseCase[]>{
    return this.http.get<UseCase[]>('http://localhost:8080/tests');
  }

  getTestDetails():UseCase{
    return ;
  }

  getTestResultsSubject():Subject<UseCaseResult[]>{
    return this.resultsSubject;
  }
}
