/**
 * No objeto ninja que a propriedade shuriken, com uma quantidade de estrelas ninjas;
 * a cada méetodo do disparo subtraia uma;
 * o ninja não pode jogar mais shurikeens caso elas tenham acabado;
 */

function Ninja(nome,qtdShuriken) {
    this.nome = nome;
    this.qtdShuriken = qtdShuriken;
    this.dispararShuriken = function() {
        if(this.qtdShuriken > 0) {
            console.log(`${this.nome} disparou uma shuriken`);
            this.qtdShuriken--;
        } else {
            console.log("Acabaram as shurikens...")
        }
    };
};

let jiraya = new Ninja('Jiraya', 10);

jiraya.dispararShuriken();
jiraya.dispararShuriken();
jiraya.dispararShuriken();
jiraya.dispararShuriken();
jiraya.dispararShuriken();
jiraya.dispararShuriken();
jiraya.dispararShuriken();
jiraya.dispararShuriken();
jiraya.dispararShuriken();
jiraya.dispararShuriken();
jiraya.dispararShuriken();
