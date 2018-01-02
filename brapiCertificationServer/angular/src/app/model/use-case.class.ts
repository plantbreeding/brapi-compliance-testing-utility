import { TestCall } from "./test-call.class";

export class UseCase{
    id: string;
    useCaseName: string;
    tests: TestCall[] = new Array();
    selected: boolean = true;
}