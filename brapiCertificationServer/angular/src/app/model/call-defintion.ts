export class CallDefinition {
    id: string;
    method: string;
    call: string;
    name: string;
    availibleParams: string[];

    static sort(a: CallDefinition, b: CallDefinition): number{
        if(a.call < b.call) return -1;
        if(a.call > b.call) return 1;
        return 0;
    }
}
