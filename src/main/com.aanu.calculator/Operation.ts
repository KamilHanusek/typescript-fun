enum Operation {

    Multiply = "*",
    Divide = "/",
    Add = "+",
    Substract = "-",
}

namespace Operation {
    export function takePriorityOfOperation(operation: Operation): number {
        if (operation == Operation.Add) return 1
        if (operation == Operation.Substract) return 1
        if (operation == Operation.Multiply) return 2
        if (operation == Operation.Divide) return 2
    }

    export function getAllOperationsSymbols(): Array<String> {
        return Object.keys(Operation).map(it => it)
    }

    export function determineOperation(operationSymbol: String): Operation {
        return Object.keys(Operation).entries.find( (symbol, it) => it === operationSymbol)
    
    }
}