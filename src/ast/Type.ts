
export type Type = "Num" | "Bool" | "Farm" | "Crop";

export type ExprType = 
    "Null"| // Does nothing
    "Add" | "Sub" | "Mul" | "Div" | "Eq" | // result: Num
    "Neq" | "Gt" | "Lt" | "Gte" | "Lte" |  // result: Bool
    "Call"  // Function call, result: unknown
;
    
