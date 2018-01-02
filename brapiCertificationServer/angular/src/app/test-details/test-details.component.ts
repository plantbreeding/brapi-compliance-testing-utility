import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

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
  useCase: UseCase;
  edit: boolean;

  constructor(private testAccessService: TestAccessService, private location: Location, private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.edit = params['edit'] === 'true';
      let useCaseId = params['id'];
       if(useCaseId){
         this.testAccessService.getTest(useCaseId).subscribe((useCase: UseCase) => {
          this.useCase = useCase;
          
          let callDef: CallDefinition = new CallDefinition();
          callDef.method = 'method';
          callDef.name = 'name';
          callDef.call = 'call';
          callDef.availibleParams = new Array();
          this.useCase.tests[0].callDefinition = callDef;
         });
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
  }
}
