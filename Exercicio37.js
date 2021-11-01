/**
 * Cria uma classee que simula um carrinho de compras de um e-commeerce;
 * Propriedades itens, quatidade total, valor total;
 * Crie os métodos para adicionar e remover itens;
 */

/** SOLUCAO resolvida */
/*
class Carrinho {
    constructor(item) {
        this.itens      = [item];
        this.qtdTotal   = item[1];
        this.valorTotal = item[2];
    }

    adicionar = function(item) {
        this.itens.push(item);
        this.qtdTotal += item[1];
        this.valorTotal += item[2];
    }

    remover = function(item) {
        for(let i = 0; i < this.itens.length; i++ ) {
            if(this.itens[i][0] == item) {
                this.qtdTotal -= this.itens[i][1];
                this.valorTotal -= this.itens[i][2];
                this.itens.splice(i,1);
            }
            
        }
    }
}

let compras = new Carrinho(['Camisa',2,30]);

console.log(compras.itens);
console.log(compras.qtdTotal);
console.log(compras.valorTotal);

compras.adicionar(['Bermuda',1,10]);

console.log(compras.itens);
console.log(compras.qtdTotal);
console.log(compras.valorTotal);

compras.adicionar(['vestido',1,80]);
compras.adicionar(['boné',2,50]);
compras.adicionar(['sunga',1,25]);

console.log(compras.itens);
console.log(compras.qtdTotal);
console.log(compras.valorTotal);

compras.remover('boné');
compras.remover('Bermuda');

console.log(compras.itens);
console.log(compras.qtdTotal);
console.log(compras.valorTotal);
*/

/** SOLUÇÃO PPROFESSOR */
class Carrinho {
    constructor(itens, qtd, valorTotal) {
        this.itens = itens;
        this.qtd = qtd;
        this.valorTotal = valorTotal;
    }

    addItem(item) {

        let contador = 0;

        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id){
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if(contador == 0) {
            this.itens.push(item);
        }

        this.qtd += item.qtd;
        this.valorTotal += item.preco * item.qtd;

    }

    removeItem(item) {
        for(let itemCarrinho in this.itens) {
            if(this.itens[itemCarrinho].id == item.id) {
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj) { return obj.id == item.id});

                this.qtd += this.itens[itemCarrinho].qtd;
                this.valorTotal += this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;

                this.itens.splice(index, 1);
            }
        }
    }

}

let carrinho = new Carrinho([
    {
        id: 01,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 02,
        nome: "Calça",
        qtd: 2,
        preco: 50
    }
],3, 120);

console.log(carrinho);

carrinho.addItem({id:01, nome:"Camisa", qtd:2, preco:20});

console.log(carrinho);

carrinho.addItem({id:03, nome:"Boné", qtd:3, preco:15});

console.log(carrinho);

carrinho.removeItem({id:01, nome:"Camisa",qtd:2, preco:20});