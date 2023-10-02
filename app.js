require("colors");

const math = require('./modules/math.js') 

console.clear();
console.log(math);

const main = async() => {
    console.log("////////////////////////////////////".bgMagenta);
    console.log("//".bgMagenta + "      Funciones Matematicas     ".blue + "//".bgMagenta);
    console.log("////////////////////////////////////\n\n".bgMagenta);
    console.log("////////////////////////////////////".bgCyan);
    console.log("//".bgCyan +"                                "+"//".bgCyan);

    console.log("//".bgCyan + "       Suma =>" + math.add(5,3) + "                 "+ "//".bgCyan);
    console.log("//".bgCyan + "       Resta =>"+math.substract(2,8) +"               "+ "//".bgCyan);
    console.log("//".bgCyan + "       Multiplicacion =>"+math.multiply(2,8) + "      "+"//".bgCyan);
    console.log("//".bgCyan + "       divicion =>"+math.divide(2,1) + "             "+"//".bgCyan);
    console.log("//".bgCyan +"                                "+"//".bgCyan);
    console.log("////////////////////////////////////".bgCyan);
}

main();