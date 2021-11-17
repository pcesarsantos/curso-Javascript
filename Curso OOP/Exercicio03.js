/**
 * Crie um objeeto Ninja, por constructor function;
 * com a propriedade de nome do ninja e o méetodo atirar shuriken;
 */

function Ninja(nome)  {
    this.nome = nome;
    this.atirarShuriken = function() {
        console.log(this.nome + " Atirou a shuriken");
    }
}

let ninja1 = new Ninja('Jiraya');
ninja1.atirarShuriken();