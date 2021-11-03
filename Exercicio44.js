/**
 * Crie uma regex quee valide endeereços de IP;
 * EX: 127.0.0.1
 * Depois teste;
 */

reg = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(reg.test('127.0.0.1'));
console.log(reg.test('asd.0.0.1'));
console.log(reg.test('127.0.'));
console.log(reg.test('127.10.0.130'));
console.log(reg.test('127.0.1a'));
console.log(reg.test('127.10.asd.130'));
console.log(reg.test('8.8.8.8'));