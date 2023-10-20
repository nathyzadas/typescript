import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function verificarParOuImpar(numero: number): void {
  if (numero < 0) {
    console.log('Por favor, digite um número inteiro positivo!');
    return;
  }

  if (numero % 2 === 0) {
    console.log(`${numero} é um número par.`);
  } else {
    console.log(`${numero} é um número ímpar.`);
  }
}

rl.question('Digite um número inteiro positivo: ', (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log('Por favor, digite um número válido!');
  } else {
    verificarParOuImpar(numero);
  }

  rl.close();
});