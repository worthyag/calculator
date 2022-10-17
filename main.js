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

// let exp = sub([23]);
let exp = div([5, 0]);
console.log({exp});