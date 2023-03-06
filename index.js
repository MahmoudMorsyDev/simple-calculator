var outputElement = document.getElementById('results')
var dotButton =document.getElementById('dot')
var theResult = 0
let value = ""
var theFirstNumber = 0
var theSecondNumber = 0
const numberList = ['.', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operationsList = {
    '+': add,
    '-': subtract,
    '*': multiply,
    '/': divide
}

const buttonsPressed = []
const operationPressed = []
const values = []
const theResults = []
var dotPressed = false
$('.btn').click(function theNumbers() {
    var value = $(this).val();
    if (numberList.includes(value)) {
        buttonsPressed.push(value)
        if (values.length === 0) {
            if (theResults.length === 0) {
                if (operationPressed.length != 0) {
                    theSecondNumber += value
                    if (theSecondNumber.length <= 12) {
                        if (theSecondNumber.length > 1 && theSecondNumber[0] === '0' && theSecondNumber[1] != '.') {
                            theSecondNumber = theSecondNumber.replace(0, "");
                            outputElement.value = theSecondNumber;
                        }else if(theSecondNumber.includes('.')){
                            dotButton.disabled = true
                            outputElement.value = theSecondNumber
                        }
                        else {
                            outputElement.value = theSecondNumber
                        }
                    }else{

                    }
                } else {
                    theFirstNumber += value

                    if (theFirstNumber.length <= 12) {
                        if (theFirstNumber.length > 1 && theFirstNumber[0] === '0' && theFirstNumber[1] != '.') {
                            theFirstNumber = theFirstNumber.replace(0, "");
                            outputElement.value = theFirstNumber;

                        }else if(theFirstNumber.includes('.')){
                            dotButton.disabled = true
                            outputElement.value = theFirstNumber
                        }
                        else {
                            buttonsPressed.push(value)
                            outputElement.value = theFirstNumber
                        }
                    } else {
                        //do nothing
                    }
                }
            } else {
                theSecondNumber += value

                if (theSecondNumber.length <= 12) {
                    if (theSecondNumber.length > 1 && theSecondNumber[0] === '0' && theSecondNumber[1] != '.') {
                        theSecondNumber = theSecondNumber.replace(0, "");
                        outputElement.value = theSecondNumber;
                    }else if(theSecondNumber.includes('.')){
                            dotButton.disabled = true
                            outputElement.value = theSecondNumber
                    } else {
                        outputElement.value = theSecondNumber
                    }
                } else {
                    //do nothing
                }
            }
        } else {
            theSecondNumber += value

            if (theSecondNumber.length <= 12) {
                if (theSecondNumber.length > 1 && theSecondNumber[0] === '0' && theSecondNumber[1] != '.') {
                    theSecondNumber = theSecondNumber.replace(0, "");
                    outputElement.value = theSecondNumber;
                }else if(theSecondNumber.includes('.')){
                            dotButton.disabled = true
                            outputElement.value = theSecondNumber
                } else {
                    outputElement.value = theSecondNumber
                }
            } else {
                //do nothing
            }
        }
    } else if (operationsList.hasOwnProperty(value)) {
        dotButton.disabled = false
        if (values.length === 0) {
            if (theResults.length === 0) {
                if (buttonsPressed[buttonsPressed.length - 1] === 'equal') {
                    values.push(theResult)
                    theOperation = operationPressed.push(operationsList[value])
                } else {
                    buttonsPressed.push(value)
                    values.push(theFirstNumber)
                    theOperation = operationPressed.push(operationsList[value])
                }
            } else {
                operationPressed.push(operationsList[value])
                if (theResults.length != 0) {
                    values.push(Number(theResults[theResults.length - 1]))
                    values.push(theSecondNumber)
                    theFunction = operationPressed[0]
                    theResult = theFunction(Number(values[0]), Number(values[1]))
                    theResults.push(theResult)
                    outputElement.value = theResult
                    operationPressed.length = 0
                    operationPressed.push(operationsList[value])
                    theSecondNumber = 0
                    theFirstNumber = 0
                    values.length = 0
                } else {
                    values.push(theSecondNumber)
                    theFunction = operationPressed[0]
                    theResult = theFunction(Number(values[0]), Number(values[1]))
                    theResults.push(theResult)
                    outputElement.value = theResult
                    operationPressed.length = 0
                    operationPressed.push(operationsList[value])
                    theSecondNumber = 0
                    theFirstNumber = 0
                    values.length = 0
                }
            }

        } else if (values.length === 1) {
            values.push(theSecondNumber)
            theFunction = operationPressed[0]
            theResult = theFunction(Number(values[0]), Number(values[1]))
            theResults.push(theResult)
            outputElement.value = theResult
            operationPressed.length = 0
            operationPressed.push(operationsList[value])
            theSecondNumber = 0
            theFirstNumber = 0
            values.length = 0
        }
    } else if (value === 'equal') {
        dotButton.disabled = false
        buttonsPressed.push(value)
        if (values.length === 0 && theResults.length === 0) {
            outputElement.value = outputElement.value
        } else if (values.length === 0 && theResults.length != 0) {
            values.push(Number(theResults[theResults.length - 1]))
            values.push(theSecondNumber)
            theFunction = operationPressed[0]
            theResult = theFunction(Number(values[0]), Number(values[1]))
            theResults.push(theResult)
            outputElement.value = theResult
            operationPressed.length = 0
            theSecondNumber = 0
            theResults.length = 0
            theFirstNumber = 0
            values.length = 0
        } else if (values.length != 0 && operationPressed.length != 0) {
            if (operationsList.hasOwnProperty(buttonsPressed[buttonsPressed.length - 1])) {
                outputElement.value = outputElement.value
            } else {
                buttonsPressed.push('equal')
                values.push(theSecondNumber)
                theFunction = operationPressed[0]
                theResult = theFunction(Number(values[0]), Number(values[1]))
                theResults.push(theResult)
                outputElement.value = theResult
                operationPressed.length = 0
                theSecondNumber = 0
                theResults.length = 0
                theFirstNumber = 0
                values.length = 0
            }
        }
    } else if (value === 'delete') {
        dotButton.disabled = false
        if (buttonsPressed[buttonsPressed.length - 1] === 'equal') {
            buttonsPressed.length = 0
            values.length = 0
            theResult = 0
            outputElement.value = 0
            operationPressed.length = 0
            theResults.length = 0
        } else {
            buttonsPressed.push(value)
            if (values.length != 0) {
                theSecondNumber = 0
                outputElement.value = 0
            } else {
                theFirstNumber = theResult
                theSecondNumber = 0
                values.length = 0
                outputElement.value = 0
            }
        }
    } else if (value === 'reset') {
        dotButton.disabled = false
        buttonsPressed.push(value)
        operationPressed.length = 0
        values.length = 0
        theResult = 0
        theResults.length = 0
        theFirstNumber = 0
        theSecondNumber = 0
        outputElement.value = 0
    }
})

function add(number1, number2) {
    return number1 + number2
}

function subtract(number1, number2) {
    return number1 - number2
}

function multiply(number1, number2) {
    return number1 * number2
}

function divide(number1, number2) {
    return number1 / number2
}
