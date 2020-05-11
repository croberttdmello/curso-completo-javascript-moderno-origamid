// Verifique se a sua idade é maior do que a de algum parente. Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
let myAge = 25;
let relativeAge = 32;

if (myAge > relativeAge)
  console.log('É maior');
else if (myAge < relativeAge)
  console.log('É menor');
else console.log('É igual');

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
// -> true - Error
// -> 3 - Correct
console.log(expressao);


// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre';
var idade = 28;
var possuiDoutorado = false;
var empregoFuturo;
var dinheiroNaConta = 0;
console.log(!!nome,
            !!idade, 
            !!possuiDoutorado, 
            !!empregoFuturo, 
            !!dinheiroNaConta);


// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (brasil > china)
  console.log('É maior');
else if (brasil < china)
  console.log('É menor');
else console.log('É igual');

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
// -> false

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}
// -> Gato - Error
// -> Cão - Correct - Retorna o último valor true encontrado