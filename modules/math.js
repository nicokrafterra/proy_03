const Math = {}

function add(a,b) {
    return a + b
}


function substract(a,b) {
    return a - b
}


function multiply(a,b) {
    return a * b
}

function divide(a,b) {
    if (b == 0) {
        return "N/A"
    } else {
        return a / b;
    }
}

Math.add = add;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;