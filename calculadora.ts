import readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function adicionar(a: number, b: number): number {
  return a + b;
}

function subtrair(a: number, b: number): number {
  return a - b;
}

function multiplicar(a: number, b: number): number {
  return a * b;
}

function dividir(a: number, b: number): number {
  return a / b;
}

rl.question('Digite o primeiro número: ', (num1) => {
  rl.question('Digite o segundo número: ', (num2) => {
    rl.question('Selecione a operação desejada (+, -, *, /): ', (operacao) => {
      const a = parseFloat(num1);
      const b = parseFloat(num2);

      let resultado: number;

      switch (operacao) {
        case '+':
          resultado = adicionar(a, b);
          break;
        case '-':
          resultado = subtrair(a, b);
          break;
        case '*':
          resultado = multiplicar(a, b);
          break;
        case '/':
          resultado = dividir(a, b);
          break;
        default:
          console.log('Operação inválida!');
          rl.close();
          return;
      }

      console.log(`Resultado: ${resultado}`);
      rl.close();
    });
  });
});