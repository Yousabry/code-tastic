import { IPerson, IPersonInterFaceAsString } from "./IPerson";

export default function defaultSortingFunc(p1: IPerson, p2: IPerson): number{
    // Put your code here
    return p1.age - p2.age;
}

export const SortFuncStartFlag: string = "function defaultSortingFunc(p1: IPerson, p2: IPerson): number{\n";

export const DefaultSortFuncAsString: string = `${IPersonInterFaceAsString}\n\n ${SortFuncStartFlag}\t// Put your code here...\n\treturn p1.age - p2.age;\n}`;