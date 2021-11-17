/**
 * Crie um objeeto Pessoa, que tem uma propprieedade nome;
 * Crie um método que eexibe o nomedo objeto Pessoa
 */

let pessoa = {
    nome: "Pedro",
    getNome: function() {
        console.log(this.nome);
    }
}

pessoa.getNome();