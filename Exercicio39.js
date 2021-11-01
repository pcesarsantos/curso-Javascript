/**
 * Crie uma classe que simule um carro;
 * Propriedades: marca, cor, gasolina restante;
 * Crie um méetodo de dirigir o carro, que vá diminuindo a gasolina gradativameente;
 * e um de abastecer para aumentar a gasolina quando necessário;
 */

class Carro {
    constructor(marca, cor, gasolina, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolina = gasolina;
        this.consumo = consumo;
    }

    dirigir = function(km) {
        this.gasolina -= km / this.consumo; 
    }

    abastecer = function(litros) {
        this.gasolina += litros;
    }
}

let carro = new Carro('FIAT', 'Veermelho', 45, 12);
console.log(carro.gasolina);
carro.dirigir(20);
console.log(carro.gasolina);
carro.dirigir(100);
carro.dirigir(5);
console.log(carro.gasolina);
carro.abastecer(10);
console.log(carro.gasolina);