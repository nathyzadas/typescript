import promptSync from 'prompt-sync';

class JogoAdivinhacao {
  numeroAleatorio: number;
  tentativas: number;
  prompt: promptSync.Prompt;

  constructor() {
    this.numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    this.tentativas = 0;
    this.prompt = promptSync();
  }

  jogar() {
    let palpite: number;
    while (true) {
      palpite = parseInt(this.prompt("Adivinhe o número (entre 1 e 10):") || "0", 10);
      this.tentativas++;

      if (palpite === this.numeroAleatorio) {
        console.log(`Parabéns! Você adivinhou o número em ${this.tentativas} tentativas.`);
        break;
      } else if (palpite < this.numeroAleatorio) {
        console.log("Tente um número maior.");
      } else {
        console.log("Tente um número menor.");
      }
    }
  }
}

const jogo = new JogoAdivinhacao();
jogo.jogar();
