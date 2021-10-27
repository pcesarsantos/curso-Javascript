/*
    Escreva uma função que receba dois números, o primeiro é a base e o segundo a potência;
    Depois faça essa operação e retorne oo resultado;
    por exemplo: 3,9 = 9
*/

function potenciacao(base, expoente) {
    //return Math.pow(base,expoente);
    //return base ** expoente;

    let resultado = 1;
    
    for(let i = 1; i <= expoente; i++) {
        resultado = resultado * base;
    }

    return resultado;
}

potenciacao(2,3);