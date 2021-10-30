/**
 * Crie um array a partir de uma frase;
 * imprima cada palavra do arrya no console por meio de um for;
 */

let frase = "Batatinha quando nasce espalha rama pelo chão";
let arr = frase.split(" ");

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}