// Crie um objeto com os seus dados pessoais.Deve possui pelo menos duas propriedades nome e sobrenome
myAccount = {
  name: 'Carlos Robert',
  surname: 'Dias Melo',
  age: 25,
  email: 'eng.carlosrobert@gmail.com',
  profession: 'web developer',
  github: 'github.com/croberttdmello',
  linkedin: 'linkedin.com/in/croberttdmello',
  fullName()  {
    return console.log( `${this.name + ' ' + this.surname}`);
  },
}

myAccount.fullName();
// Crie um método no objeto anterior, que mostre o seu nome completo

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

console.log(carro);
carro.preco = 3000;
console.log(carro);

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem
cachorro = {
  raca: 'labrador',
  cor: 'preto',
  idade: 10,
  isHomem(sexo) {
    if (sexo === 'homem') console.log('Au, au, au...');
  },
}

cachorro.isHomem('homem');
cachorro.isHomem('mulher');