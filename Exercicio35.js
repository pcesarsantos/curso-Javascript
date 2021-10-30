/**
 * Crie um objeto calculadora;
 * Que tem os seguintes métodos: soma, subtrair, multiplicar e dividir;
 * Os métodos só devem aceitar dois parâmetros;
 * utilize cada um dos métodos e imprima os valores no console;
 */

const calculadora = {
    somar: function(num1, num2) {
        return num1 + num2;
    },
    subtrair: function(num1, num2) {
        return num1 - num2;
    },
    multiplicar: function(num1, num2) {
        return num1 * num2;
    },
    dividir: function(num1, num2) {
        return num1 / num2;
    }
}

console.log(calculadora.somar(20,5));
console.log(calculadora.subtrair(40,3));
console.log(calculadora.multiplicar(10,2));
console.log(calculadora.dividir(30,6));