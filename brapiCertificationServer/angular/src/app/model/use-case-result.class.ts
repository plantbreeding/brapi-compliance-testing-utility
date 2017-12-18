import { UseCase } from "./use-case.class";
import { TestCallResult } from "./test-call-result.class";

export class UseCaseResult{
    batchID: string;
    pass: boolean;
    useCase: UseCase;
    results: TestCallResult[];
}