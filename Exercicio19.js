/*
    Escreva uma função que retorne um número aleatório;
    O número máximo retornado deve ser passado via parâmetro;
    Dica: utilize Math.random();
*/

function numeroAleatorio(numMax) {
    return Math.floor(Math.random() * numMax) + 1 ;
}

console.log(numeroAleatorio(20));