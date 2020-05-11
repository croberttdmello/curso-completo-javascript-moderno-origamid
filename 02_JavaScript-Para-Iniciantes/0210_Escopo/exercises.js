// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
}

// console.log(cor, marca, portas);
// -> Porque as variáveis "marca" e "portas" (declaradas com let e const respectivamente), foram criadas dentro de um bloco e não podem ser acessadas fora do mesmo. 


// Como corrigir o erro abaixo?

function somarDois(x) {
  const dois = 2;
  return x + dois;
}

function dividirDois(x) {
  const dois = 2;
  return x / dois;
}

console.log(somarDois(4));
console.log(dividirDois(6));


// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);
