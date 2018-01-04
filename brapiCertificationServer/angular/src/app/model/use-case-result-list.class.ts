import { UseCaseResult } from "./use-case-result.class";

export class UseCaseResultList{
    batchID: string;
    total: number;
    complete: number;
    results: UseCaseResult[];
}