/**
 * Crie uma regex que aceite a seguinte expreessão "Marca: nomeDaMarca"
 * Onde nomeDaMarca pode variar para Nike, Adidas, Puma, Asics;
 * Depois teste;
 */
reg = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(reg.test('Marca: Nike'));
console.log(reg.test('Marca: Adidas'));
console.log(reg.test('Marca: Puma'));
console.log(reg.test('Marca: Asics'));
console.log(reg.test('Marca: Kappa'));
console.log(reg.test('Marca: Mizuno'));
console.log(reg.test('Marca: Olympikus'));
console.log(reg.test('Marca: Gonew'));
console.log(reg.test('Nike'));
console.log(reg.test('Adidas'));
console.log(reg.test('Puma'));
console.log(reg.test('Asics'));
console.log(reg.test('Kappa'));
console.log(reg.test('Mizuno'));
console.log(reg.test('Olympikus'));
console.log(reg.test('Gonew'));