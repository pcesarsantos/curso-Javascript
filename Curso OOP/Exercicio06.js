/**
 * Crie uma função que retorna se o objeto é uma instancia de outro objeto;
 * Deve apresentar no console as mensagens de ppositivo e negativo;
 */

function Pessoa(nome) {
    this.nome = nome; 
}

function Carro(nome) {
    this.nome = nome;
}

function compararObjetos(obj1, obj2) {
    if(obj1 instanceof obj2) {
        console.log('positivo');
    } else {
        console.log('negativo');
    }
}

let aluno = new Pessoa('Pedro');
let gol   = new Carro('Gol');

compararObjetos(aluno, Pessoa);
compararObjetos(aluno, Carro);
compararObjetos(gol, Pessoa);
compararObjetos(gol, Carro);

