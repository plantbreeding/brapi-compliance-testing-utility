import { CallDefinition } from "./call-defintion";

export class TestCall{
    id: String;
    useCaseIndexNumber: number;
    callPath: String;
    expectedResultRaw: String;
    callDefinition: CallDefinition;
    paramList: Map<string, string>;

    constructor(){
        this.paramList = new Map();
    }
}