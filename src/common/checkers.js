/**
 * Throws an exception if the arugment is null or undefined
 * @param argument the argument to check
 * @param {String} argumentName the argument's name in the function
 */
 export function nullChecker(argument, argumentName){
    if (argument === null){
        throw debugThrow(`null argument ${argumentName}`)
    }
    if (argument === undefined){
        throw debugThrow(`undefined argument ${argumentName}`)
    }
}

/**
 * @param {String} reason reason for the debug error
 * @returns an object to add to an error modal
 */
 const debugThrow = reason => {
    return {
        status: 'Debug',
        reason
    }
}

