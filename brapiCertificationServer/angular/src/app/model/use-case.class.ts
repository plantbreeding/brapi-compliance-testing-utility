import { TestCall } from "./test-call.class";

export class UseCase{
    id: String;
    useCaseName: String;
    tests: TestCall[];
    selected: boolean = true;
}