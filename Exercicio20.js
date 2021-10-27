/*
    Escreva uma função que recebe a idade de uma pessoa;
    Se ela tem mais de 18 anos ela pode entrar na auto escola, imprima uma mensagem informando isso;
    Se ela tem menos, ela não pode, imprima outra mensagem com este aviso;
    Execute a função nos dois casos;
*/

function podeDirigir(idade) {
    if(idade >= 18) {
        console.log('Pode tirar habilitação!');
    } else {
        console.log("Não pode tirar habilitação, aguarde até completar 18 anos");
    }
}

podeDirigir(22);
podeDirigir(15);