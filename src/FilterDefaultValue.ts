import { IPerson, IPersonInterFaceAsString } from "./IPerson";

export default function defaultFilter(person: IPerson): boolean{
    // Put your code here
    return true;
}

export const FilterStartFlag: string = "function filterFunc(person: IPerson): boolean{\n";

export const DefaultFilterCodeAsString: string = `${IPersonInterFaceAsString}\n\n ${FilterStartFlag}\t// Put your code here...\n\treturn true;\n}`;
