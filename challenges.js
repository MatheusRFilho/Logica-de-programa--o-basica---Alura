alert('Boas vindas ao nosso site!')
let nome = "Lua";
let idade = 25;
let numeroDeVendas = 25;
let saldoDisponivel  = 1000;
alert('Erro! Preencha todos os campos');
let mensagemDeErro = 'Erro! Preencha todos os campos';
alert(mensagemDeErro);

nome = prompt('Qual o seu nome?');
idade = prompt('Qual a sua idade?');

if (idade >= 18) {
  alert('Pode tirar a habilitação');
} 

//Day 2

let dia = prompt('Qual é o dia da semana?');

if (dia === 'Sábado' || dia === 'Domingo') {
  alert('Bom fim de semana!');
} else {
  alert('Boa semana!');
}

let number = prompt('Digite um número');

if (number >= 0) {
  alert('Positivo');
} else {
  alert('Negativo');
}

let pontuation = prompt('Qual foi sua pontuação?');
if (pontuation >= 100) {
  alert('Parabéns, você venceu!');
} else {
  alert('Tente novamente');
}


alert(`Saldo disponivel: ${saldoDisponivel}`)

nome = prompt('Qual o seu nome?');
alert(`Bem vindo ${nome}`)

//Day 3

let contador = 1;
while (contador <= 10) {
  console.log(contador);
  contador++;
} 


while (contador >= 1) {
  console.log(contador);
  contador--;
} 

let value = prompt('Digite um número');
while (value >= 0) {
  console.log(value);
  value--;
} 


contador = 0;
 value = prompt('Digite um número');
 while (contador <= value) {
  console.log(contador);
  contador++;
} 

// dia 4
console.log('Boas Vindas')

let nome2 = 'matheus'
console.log(`Ola, ${nome2}`)
alert(`Ola, ${nome2}`)

let languaje = prompt('Qual a linguagem de programação que você mais gosta?')
console.log(languaje)


let valor1 = 1
let valor2 = 2
let resultado = valor1 + valor2
console.log(`A soma de [${valor1}] e [${valor2}] é igual a [${resultado}].`)

let resultado2 = valor1 + valor2
console.log(`A diferença de [${valor1}] e [${valor2}] é igual a [${resultado2}].`)


let age = prompt('Qual a sua idade?')
console.log(age >= 18 ? 'Maior de idade' : 'Menor de idade')

let numero = prompt('Digite um numero?')

if (number > 0) {
  console.log('Positivo');
} else if (number < 0) {
  console.log('Negativo');
} else {
  console.log('Zero');
}


let contagem = 1
while (contagem <= 10) {
  console.log(contagem)
}

let nota = 10
if (nota >= 7) {
  console.log('Aprovado');
} else {
  console.log('Reprovado');
} 


let number1 = Math.random();
console.log(number1)

let number2 = Math.random() * 10 + 1;
console.log(number2)

let number3 = Math.random() * 1000 + 1;
console.log(number3)

