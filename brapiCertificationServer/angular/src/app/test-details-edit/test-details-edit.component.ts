import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UseCase } from '../model/use-case.class';
import { TestAccessService } from '../service/test-access.service';
import { TestCall } from '../model/test-call.class';
import { CallDefinition } from '../model/call-defintion';
import { TestCallParam } from '../model/test-call-param';
import { Observable } from 'rxjs/Rx';

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

  constructor(private testAccessService: TestAccessService) { }

  ngOnInit() {
    this.callDefs = new Array();
    this.buildCallDefsList();
    this.useCaseObs.subscribe((useCase: UseCase) => {
      this.useCase = useCase;
    });
  }

  save() {
    this.toggleEdit.emit(true);
    this.testAccessService.saveTest(this.useCase).subscribe((id: string) => {
      this.useCaseId.emit(id);
    },
      (err: string) => {
        console.log('something bad happened');
      });
  }

  addCall() {
    let testCall: TestCall = new TestCall();
    testCall.useCaseIndexNumber = this.useCase.tests.length;
    testCall.callDefinition = this.callDefs[0];
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

  isCallDefSelected(callDef0: CallDefinition, callDef1: CallDefinition){
    return callDef0 && callDef1 ? callDef0.id === callDef1.id : callDef0 === callDef1;
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
    call.callPath = call.callDefinition.call;
    if (call.paramList.length > 0) {
      let first = true;
      call.paramList.forEach((entity) => {
        if (entity.value.length > 0) {
          if (entity.param.startsWith('<') && entity.param.endsWith('>')) {
            call.callPath = call.callPath.replace(entity.param, entity.value);
          } else {
            if (first) {
              first = false;
              call.callPath = call.callPath + '?' + entity.param + '=' + entity.value;
            } else {
              call.callPath = call.callPath + '&' + entity.param + '=' + entity.value;
            }
          }
        }
      })
    }
  }

  buildCallDefsList() {
    this.testAccessService.getCallDefinitions().subscribe((data) => {
      this.callDefs = data;
    });
  }
}
