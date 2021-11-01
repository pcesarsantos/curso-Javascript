/**
 * Crie uma classe que simula uma conta no banco ( utilize a forma que ppreferir);
 * Deve conter a propriedade saldo;
 * EE os métodos deeposito e saque;
 * Testee oos métodoos;
 */
class ContaBancaria {
    constructor(valor) {
        this.saldo = valor;
    }

    deposito = function(valor) {
        this.saldo += valor;
    }

    saque = function(valor) {
        if(valor < this.saldo) {
            this.saldo -= valor;
        } else {
            console.log('Saldo insuficiente');
        }
    }
}

let cc = new ContaBancaria(100);

console.log(cc.saldo);
cc.saque(1000);
cc.saque(10);
console.log(cc.saldo);
cc.deposito(300);
console.log(cc.saldo);