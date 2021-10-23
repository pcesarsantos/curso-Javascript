let numero = 80;
let primo = 'é primo';

for(let i = numero; i > 0; i--) {
    if((i != numero) && (i != 1) && (numero%i == 0) || (i==1)) {
        primo = 'não é primo';
    }
}

console.log(primo);