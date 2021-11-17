/**
 * Crie um objetoo quee tenha características de um caminhão e coloque em proppriedades disitntas;
 * com destructing cooloque essas propriedades em variaveis separadas;
 */

let caminhao = {
    marca: "VW",
    portas: 2,
    carreta: true
};

let {marca, portas, carreta} = caminhao;

console.log(marca);
console.log(portas);
console.log(carreta);