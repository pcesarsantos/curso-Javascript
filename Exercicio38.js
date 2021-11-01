/**
 * Crie um objeto que simula um endereço de um clieente;
 * Propriedades: Rua, Bairro, Cidade e Estado;
 * No construtor o endereço já deve ser definido por coompleto;
 * Crie métodos para atualizar todas as ppropriedades;
 */

class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set setRua(rua) {
        this.rua = rua;
    }

    set setBairro(bairro) {
        this.bairro = bairro;
    }

    set setCidade(cidade) {
        this.cidade = cidade;
    }

    set setEstado(estado) {
        this.estado = estado;
    }
}

let endereco = new Endereco('AV. Presidente Vargas','Jardim Irajá','ribeirão preto','sp');
console.log(endereco);
endereco.setBairro = 'Jardim Paulista';
endereco.setRua = 'Av. Plinio de Castro prado';
endereco.setCidade = 'Ribeirão Preto';
endereco.setEstado = 'SP';

console.log(endereco);