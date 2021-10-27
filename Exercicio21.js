/*
    Escreva uma função que detecta o tipo de dado ppassado;
    Verifique se é um: numer, boolean ou string
    E retorne uma mensagem para cada tipo;
    Execute uma função para cada caso;
*/

function tipoDeDado(variavel) {
    switch(typeof variavel) {
        case 'number' :
            console.log("Você informou um numero");
            break;
        case 'string' :
            console.log("Você informou uma string");
            break;
        case 'boolean' : 
            console.log("Você informou um boleano");
            break;
    }
}

tipoDeDado('variavel');
tipoDeDado(10);
tipoDeDado(false);
