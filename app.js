alert('Boas vindas ao jogo do número secreto');

let numeroMaximo = 5000;
let secretNumber = parseInt(Math.random() * numeroMaximo + 1);
let guest;
let tentativas = 1;

while (secretNumber != guest) {
  guest = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)
  
  if (secretNumber == guest) {
    break
  } else {
    if (guest > secretNumber) {
      alert('O número secreto é menor');
    } else {
      alert('O número secreto é maior');
    }
    tentativas++;
  }
}

alert(`O número secreto era ${secretNumber} e você acertou com apenas ${tentativas > 1 ? 'tentativas' : 'tentativa'} `);
