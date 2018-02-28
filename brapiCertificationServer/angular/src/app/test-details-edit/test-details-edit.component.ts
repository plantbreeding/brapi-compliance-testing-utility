import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { UseCase } from '../model/use-case.class';
import { TestAccessService } from '../service/test-access.service';
import { TestCall } from '../model/test-call.class';
import { CallDefinition } from '../model/call-defintion';
import { TestCallParam } from '../model/test-call-param';
import { AlertService } from '../service/alert.service';

@Component({
  selector: 'app-test-details-edit',
  templateUrl: './test-details-edit.component.html',
  styleUrls: ['./test-details-edit.component.css']
})
export class TestDetailsEditComponent implements OnInit {

  @Input() useCaseObs: Observable<UseCase>;
  useCase: UseCase;
  @Output() toggleEdit: EventEmitter<boolean> = new EventEmitter();
  @Output() useCaseId: EventEmitter<string> = new EventEmitter();
  callDefs: CallDefinition[];

  constructor(private testAccessService: TestAccessService, private router: Router, private alertService: AlertService) { }

  ngOnInit() {
    this.callDefs = new Array();
    this.testAccessService.getCallDefinitions().subscribe((data) => {
      this.callDefs = data.sort(CallDefinition.sort);
      this.useCaseObs.subscribe((useCase: UseCase) => {
        this.useCase = useCase;
        console.log(this.useCase);
      });
    }, err => {
      this.alertService.handleHTTPError(err);
    });
  }

  save() {
    this.testAccessService.saveTest(this.useCase).subscribe((id: string) => {
      this.toggleEdit.emit(true);
    }, err => {
      this.alertService.handleHTTPError(err);
    });
  }

  delete(){
    this.testAccessService.deleteUseCase(this.useCase.id).subscribe(() =>{
      this.router.navigate(['/runtests']);
    }, err => {
      this.alertService.handleHTTPError(err);
    });
  }

  addCall() {
    let testCall: TestCall = new TestCall();
    testCall.useCaseIndexNumber = this.useCase.tests.length;
    testCall.callDefinitionID = this.callDefs[0].id;
    this.buildCallPath(testCall);
    this.useCase.tests.push(testCall);
  }

  callDefinitionChanged(call: TestCall) {
    call.paramList = [];
    this.buildCallPath(call);
  }

  getParamValue(call: TestCall, param: string): string{
    let entity = call.paramList.find((value) => {
      return value.param == param;
    })
    if(entity){
      return entity.value;
    }else{
      return '';
    }
  }

  onParamChange(value: string, param: string, call: TestCall) {
    let index = call.paramList.findIndex((entity, i, obj) => {
      return entity.param == param;
    });
    if (value.length > 0) {
      if (index >= 0) {
        call.paramList[index].value = value;
      } else {
        call.paramList.push(new TestCallParam(param, value))
      }
    } else {
      if (index >= 0) {
        call.paramList.splice(index, 1);
      }
    }
    this.buildCallPath(call);
  }

  buildCallPath(call: TestCall) {
    let callPath: string = this.findCallDefById(call.callDefinitionID).call;
    if (call.paramList.length > 0) {
      let first = true;
      call.paramList.forEach((entity) => {
        if (entity.value.length > 0) {
          if (entity.param.startsWith('{') && entity.param.endsWith('}')) {
            callPath = callPath.replace(entity.param, entity.value);
          } else {
            if (first) {
              first = false;
              callPath = callPath + '?' + entity.param + '=' + entity.value;
            } else {
              callPath = callPath + '&' + entity.param + '=' + entity.value;
            }
          }
        }
      })
    }
    call.callPath = encodeURI(callPath);
  }

  buildCallDefsList() {
    this.testAccessService.getCallDefinitions().subscribe((data) => {
      this.callDefs = data;
    }, err => {
      this.alertService.handleHTTPError(err);
    });
  }

  findCallDefById(id: string) : CallDefinition {
    let calldef = this.callDefs.find((value: CallDefinition) => {
      return value.id == id;
    });
    return calldef;
  }

  loadDefault(call: TestCall){
    this.testAccessService.getDefaultExpectedData(call.callPath).subscribe((data) => {
      call.expectedResultRaw = JSON.stringify(data, null, 4);
    });
  }
}
