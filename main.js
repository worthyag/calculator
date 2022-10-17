const add = function(array) {
    if (!array)
        return 0;
    return array.reduce((partialSum, a) => partialSum + a, 0);
}

const sub = function(array) {
    if (!array)
        return 0;
    return array.reduce((partialSum, a) => partialSum - a);
}

const mult = function(array) {
    if (!array)
        return 0;
    return array.reduce((partialSum, a) => partialSum * a, 1);
}

const div = function(array) {
    if (!array)
        return 0;
    if ((array.reduce((partialSum, a) => partialSum / a)) === Infinity)
        return "Math ERROR";
    return array.reduce((partialSum, a) => partialSum / a);
}

const operate = function(operator, array) {
    switch(operator) {
        case '+':
            return add(array);
        case '-':
            return sub(array);
        case '*':
            return mult(array);
        case '/':
            return div(array);
        default:
            console.log("Operator not recognised.");
    }
}

console.log(operate('*', [2, 3, 9, 8]));

