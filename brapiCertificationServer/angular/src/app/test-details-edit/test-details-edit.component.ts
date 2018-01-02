import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UseCase } from '../model/use-case.class';
import { TestAccessService } from '../service/test-access.service';
import { TestCall } from '../model/test-call.class';
import { CallDefinition } from '../model/call-defintion';

@Component({
  selector: 'app-test-details-edit',
  templateUrl: './test-details-edit.component.html',
  styleUrls: ['./test-details-edit.component.css']
})
export class TestDetailsEditComponent implements OnInit {

  @Input() useCase: UseCase;
  @Output() toggleEdit: EventEmitter<boolean> = new EventEmitter();
  @Output() useCaseId: EventEmitter<string> = new EventEmitter();
  callDefs: CallDefinition[];

  constructor(private testAccessService: TestAccessService) { }

  ngOnInit() {
    this.callDefs = new Array();
    this.buildCallDefsList();
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
    call.paramList = new Map();
    this.buildCallPath(call);
  }

  onParamChange(value: string, param: string, call: TestCall) {
    call.paramList.set(param, value);
    this.buildCallPath(call);
  }

  buildCallPath(call: TestCall) {
    call.callPath = call.callDefinition.call;
    if (call.paramList.size > 0) {
      let first = true;
      call.paramList.forEach((value: string, key: string) => {
        if (value.length > 0) {
          if (key.startsWith('<') && key.endsWith('>')) {
            call.callPath = call.callPath.replace(key, value);
          } else {
            if (first) {
              first = false;
              call.callPath = call.callPath + '?' + key + '=' + value;
            } else {
              call.callPath = call.callPath + '&' + key + '=' + value;
            }
          }
        }
      })
    }
  }

  buildCallDefsList() {
    this.callDefs.push(this.buildMockCallDef('GET', 'GET /calls', '/calls', 2));
    this.callDefs.push(this.buildMockCallDef('GET', 'GET /crops', '/crops', 0));
    let extraParam = this.buildMockCallDef('GET', 'GET /programs/<programDbId>', '/programs/<programDbId>', 3);
    extraParam.availibleParams.push('<programDbId>');
    this.callDefs.push(extraParam);
  }

  buildMockCallDef(method: string, name: string, call: string, params: number) {
    let callDef: CallDefinition = new CallDefinition();
    callDef.method = method;
    callDef.name = name;
    callDef.call = call;
    callDef.availibleParams = new Array();
    for (let i = 0; i < params; i++) {
      callDef.availibleParams.push('param' + i);
    }
    return callDef;
  }
}
