/**
 *  Crie uma regex que aceite só letras maiúsculas;
 *  Depois teste;
 */

reg = /^[A-Z]+$/;

console.log(reg.test('123'));
console.log(reg.test('123asd'));
console.log(reg.test('asd'));
console.log(reg.test('asd123'));
console.log(reg.test('ASD123'));
console.log(reg.test('123ASD'));
console.log(reg.test('ASD'));


