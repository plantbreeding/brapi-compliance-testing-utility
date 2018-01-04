import { CallDefinition } from "./call-defintion";
import { TestCallParam } from "./test-call-param";

export class TestCall{
    id: String;
    useCaseIndexNumber: number;
    callPath: String;
    expectedResultRaw: String;
    callDefinition: CallDefinition;
    paramList: TestCallParam[];

    constructor(){
        this.paramList = [];
    }
}