import {Farm} from "../backend/Farm";
import {Crop} from "../backend/Crop";

// The type of an expression
export type ExprTypeStr =
    | "Null" // Does nothing
    | TypeStr
    | "String"
    | "Name"
    | "Add"
    | "Sub"
    | "Mul"
    | "Div"
    | "Eq" // result: Num
    | "Neq"
    | "Gt"
    | "Lt"
    | "Gte"
    | "Lte" // result: Bool
    | "Call"; // Function call, result: unknown

// The type of a value
export type Type = number | boolean | Farm | Crop | string | null;
export type TypeStr = "Num" | "Bool" | "Farm" | "Crop" | "String" | "Null";

export function typeToString(type: Type): TypeStr {
    if (type instanceof Farm) return "Farm";
    if (type instanceof Crop) return "Crop";
    if (type === null) return "Null"; // Handle null explicitly
    switch (typeof type) {
        case "number": return "Num";
        case "boolean": return "Bool";
        case "string": return "String"; // Added missing case
        default:
            console.warn("Unknown type: " + type); // Maybe log instead of throwing
            return "Null"; // Fallback or throw Error if strict typing is needed
    }
}

export class Result {
    type: TypeStr;
    value?: Type;

    constructor(type: TypeStr, value: Type) {
        this.type = type;
        this.value = value;
    }

    show() {
        switch (this.type) {
            case "Null":
                break;
            case "Bool":
            case "Num":
            case "String":
            case "Farm":
            case "Crop":
                console.log(this.value);
                break;
            default:
                throw new Error("Unknown result type: " + this.type);
        }
    }
}