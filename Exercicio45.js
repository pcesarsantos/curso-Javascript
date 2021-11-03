/**
 * Crie uma regex que validee nome de usuários no sistema;
 * Aceita letras de a-z, _ e -, números de 0-9, mínimo de 3 caracteres e máximo de 16;
 * Deeppois teste;
 */
 reg = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(reg.test('ppedroo03'));
console.log(reg.test('p-cesar'));
console.log(reg.test('pcesar_012'));
console.log(reg.test('pedro.cesa.santos12345'));