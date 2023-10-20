import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function contagemRegressiva(numero: number): void {
  if (numero < 0) {
    console.log('Por favor, digite um número inteiro positivo!');
    return;
  }

  for (let i = numero; i >= 0; i--) {
    console.log(i);
  }
}

rl.question('Digite um número inteiro positivo: ', (input) => {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log('Por favor, digite um número válido!');
  } else {
    contagemRegressiva(numero);
  }

  rl.close();
});