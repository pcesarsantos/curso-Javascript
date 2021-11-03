/**
 * Crie uma regex quee só aceite strings terminadas com ID;
 * Depois teste
 */

reg = /\w+ID\b/;

console.log(reg.test('teste'));
console.log(reg.test('teste123'));
console.log(reg.test('123teste'));
console.log(reg.test('testeid'));
console.log(reg.test('1234id'));
console.log(reg.test('ID12344'));
console.log(reg.test('IDadkfaf'));
console.log(reg.test('testabndoID'));