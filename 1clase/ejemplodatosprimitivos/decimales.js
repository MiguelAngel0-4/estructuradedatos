function sumar(a,b){
    return a + b;
}
function restar(a,b){
    return a - b;
}
function multi(a,b){
    return a * b;
}
function divi(a,b){
    if (b === 0) {
        return "Error: No se puede dividir entre 0";
    }
    return a / b;
}

let num1 = 10.7;
let num2 = 5.4;

let suma = sumar(num1, num2);
let resta = restar(num1, num2);
let multiplicacion = multi(num1, num2);
let division = divi(num1, num2);

console.log(`La suma de ${num1} + ${num2} es: ${suma}`);
console.log(`La resta de ${num1} - ${num2} es: ${resta}`);
console.log(`La multiplicacion de ${num1} * ${num2} es: ${multiplicacion}`);
console.log(`La division de ${num1} / ${num2} es: ${division}`);