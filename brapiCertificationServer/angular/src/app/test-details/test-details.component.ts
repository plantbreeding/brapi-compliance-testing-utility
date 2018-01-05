import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { TestAccessService } from '../service/test-access.service';
import { UseCase } from '../model/use-case.class';
import { CallDefinition } from '../model/call-defintion';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  providers: [ TestAccessService ],
  styleUrls: ['./test-details.component.css']
})
export class TestDetailsComponent implements OnInit, OnDestroy {
  private sub: any;
  useCase: Observable<UseCase>;
  edit: boolean;
  useCaseId: string;

  constructor(private testAccessService: TestAccessService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.edit = params['edit'] === 'true';
      this.useCaseId = params['id'];
       if(this.useCaseId){
        this.useCase = this.testAccessService.getTest(this.useCaseId);
       }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  back(){
    this.location.back();
  }

  toggleEdit(){
    this.edit = !this.edit;
    this.useCase = this.testAccessService.getTest(this.useCaseId);
  }
}
