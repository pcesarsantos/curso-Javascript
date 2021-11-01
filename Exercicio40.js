/**
 * Crie uma classe conta bancaria;
 * Com as propriedades de saldo na conta coorrente, saldo na conta poupança e juros da poupança;
 * Crie os métodos de deepósito e saque, também um méetodo para transferir dinheiro da poupança para a corrente;
 * Além disso crie uma conta eespeecial que herda da conta normal;
 * Naconta espeecial os juros são dobrados da conta normal;
 */

class ContaBancaria {
    constructor(saldoCC, saldoCP, jurosCP) {
        this.saldoCC = saldoCC;
        this.saldoCP = saldoCP;
        this.jurosCP = jurosCP;
    }

    deposito(valor) {
        this.saldoCC += valor;
    }

    saque(valor) {
        if(valor <= this.saldoCC) {
            this.saldoCC -= valor;
        } else {
            console.log('Saldo insuficiente');
        }
    }

    transferirCP(valor) {
        if(valor <= this.saldoCC) {
            this.saldoCP += valor;
            this.saldoCC -= valor;
        } else {
            console.log('Saldo insuficiente');
        }
    }

    transferirCC(valor) {
        if(valor <= this.saldoCP) {
            this.saldoCC += valor;
            this.saldoCP -= valor;
        } else {
            console.log('Saldo insuficiente');
        }
    }

    render() {
        this.saldoCP += this.saldoCP * (this.jurosCP / 100); 
    }
}

class ContaEspecial extends ContaBancaria {
    /*render() {
        this.saldoCP += this.saldoCP * ((this.jurosCP / 100) * 2);
    }*/
    constructor(saldoCC, saldoCP, jurosCP) {
        super(saldoCC, saldoCP, jurosCP*2);
    }
}

let CC = new ContaBancaria(100,50,3);
let CE = new ContaEspecial(100,200,3);

console.log(CC);

CC.deposito(200);
console.log(CC);
CC.saque(50);
console.log(CC);
CC.transferirCP(150);
console.log(CC);
CC.render();
console.log(CC);
console.log(CE);
CE.render();
console.log(CE);

