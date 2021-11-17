/**
 * Crie dois objetos que compartilhem nomes de epropriedadees via object literals;
 * uma variável deve deefinir a parte que see repete nas pproprieedades dos objetos;
 */

const c = 'corDo';
const n = 'nome';

let p1 = {
    [n+"Pessoa"] : 'Pedro',
    [c+"Cabelo"] : 'Castanho',
};
let c1 = {
    [n+"Carro"] : 'Gol',
    [c+"Carri"] : 'Preto',
};

console.log(p1);
console.log(c1);