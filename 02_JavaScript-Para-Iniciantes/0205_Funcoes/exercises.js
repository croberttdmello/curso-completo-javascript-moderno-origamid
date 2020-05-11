// Crie uma função para verificar se um valor é Truthy
const isTruthy = value => !!value;
console.log(isTruthy(10));
console.log(isTruthy(0));

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado
const perimeter = square => 4 * square;
console.log(perimeter(10));

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome
const fullName = (name, surname) => `${name + ' ' + surname}`;
console.log(fullName('Carlos','Robert'));

// Crie uma função que verifica se um número é par
const isEven = value => value % 2 === 0;
console.log(isEven(12));

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

const typeofIs = value => typeof value;
console.log(typeofIs('Robert'));
console.log(typeofIs(10));
console.log(typeofIs([]));
console.log(typeofIs({}));

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', () => console.log('Carlos Robert Dias Melo'));
addEventListener('click', () => console.log('\n'));

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}

function jaVisitei(paisesVisitados) {
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

console.log(precisoVisitar(20));
console.log(jaVisitei(20));
