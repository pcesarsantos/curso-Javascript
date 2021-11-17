/**
 * Criee um objeto Inimigo, com as propriedades nome e vivo ( que é um boolean e inicie como true);
 * O método atirarShuriken do exercicio assado deve 'matar' o inimigo, setando a propriedade do inimigo vivo para false;
 */

 function Ninja(nome,qtdShuriken) {
    this.nome = nome;
    this.qtdShuriken = qtdShuriken;
    this.dispararShuriken = function(obj) {
        if(this.qtdShuriken > 0) {
            console.log(`${this.nome} disparou uma shuriken`);
            this.qtdShuriken--;
            if(obj.vivo == true) {
                obj.vivo = false;
            } else {
                console.log(`${obj.nome} eestá morto`);
            }
            
        } else {
            console.log("Acabaram as shurikens...")
        }
    };
};

function Inimigo(nome) {
    this.nome = nome;
    this.vivo = true;
}

let jiraya = new Ninja("Jiraia", 3);
let danzou = new Inimigo("Danzou");

jiraya.dispararShuriken(danzou);