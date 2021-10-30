/**
 * Crie um array com 5 nomes, incluindo o seu;
 * Verifique se o seu nome existe no array;
 * Se eexistir imprima alguma mensagem no console;
 */

let nomes = ["André", "Paulo", "Heitor", "Pedro", "Emerson"];

if(nomes.includes("Pedro")) {
    console.log("Nome encontrado!");
} else {
    console.log("o nome não foi encontrado!");
}