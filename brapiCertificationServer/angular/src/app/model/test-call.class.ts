import { CallDefinition } from "./call-defintion";
import { TestCallParam } from "./test-call-param";

export class TestCall{
    id: string;
    useCaseIndexNumber: number;
    serverIndexNumber:number = 1;
    callPath: string;
    expectedResultRaw: string;
    callDefinitionID: string;
    paramList: TestCallParam[];

    constructor(){
        this.paramList = [];
    }
}