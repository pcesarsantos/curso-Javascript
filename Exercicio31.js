/**
 * Crie dois arrays, um com mais de 5 elementos e outro com menos;
 * Faça uma função que verifica o número de elementos;
 * se possuir menos que 5, imprima "Poucos elementos" no console;
 * Se tiver mas, imprima "Muitos elementos"
 */

let arr1 = [1,5,30,25,52,60,24,90];
let arr2 = [1,8,6];

function qtdElementos(arr) {
    if(arr.length < 5) {
        console.log("Poucos elementos");
    } else {
        console.log("Muitos elementos");
    }
}

qtdElementos(arr1);
qtdElementos(arr2);