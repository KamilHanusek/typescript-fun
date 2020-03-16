class OperatorsAndNumbersOrderResolver {

    private readonly operatorsSymbolsRegex: String = Operation.getAllOperationsSymbols().join();


    fun getOperatorsInRightOrder(text: String) {
        let allOperators = text.split("[${operatorsSymbolsRegex}]")
        return allOperators.map(it => Operatio) ((first, second) => Operation.takePriorityOfOperation())
                return 0;
    }
}