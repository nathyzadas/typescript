import prompt from "prompt-sync";

class Personagem {
    // Atributos
    nome: string = "";
    energia: number = 0;
    vida: number = 0;
    atk: number = 0;
    def: number = 0;

    constructor(nome: string, energia: number, vida: number, atk: number, def: number) {
        this.nome = nome;
        this.energia = energia;
        this.vida = vida;
        this.atk = atk;
        this.def = def;
    }
}

let teclado = prompt();

let personagem1: Personagem | null = null; // Inicializando personagem1 como null

let op: number = 0;

while (op != 9) {
    console.log("===============================");
    console.log("= 1 Inserir um personagem      ");
    console.log("= 2 Mudar nome                ");
    console.log("= 3 Atualizar ataque          ");
    console.log("= 4 Atualizar defesa          ");
    console.log("= 5 Atualizar energia         ");
    console.log("= 6 Atualizar vida            ");
    console.log("= 7 Zerar status              ");
    console.log("= 8 Visualizar personagem      ");
    console.log("= 9 Sair                      ");
    console.log("===============================");

    op = +teclado("Escolha uma opção: ");

    if (op !== 1 && personagem1 === null) {
        console.log("Crie um personagem primeiro (opção 1) antes de executar outras ações.");
        continue;
    }

    switch (op) {
        case 1:
            let nome = teclado("Insira o nome do personagem: ");
            let vida = +teclado("Insira a vida do personagem: ");
            let energia = +teclado("Insira a energia do personagem: ");
            let atk = +teclado("Insira o atk do personagem: ");
            let def = +teclado("Insira a def do personagem: ");

            personagem1 = new Personagem(nome, energia, vida, atk, def);

            console.log("Personagem inserido:", personagem1);
            break;

        case 2:
            if (personagem1 !== null) {
                let novoNome = teclado("Insira o novo nome do personagem: ");
                personagem1.nome = novoNome;
                console.log("Nome do personagem atualizado:", personagem1.nome);
            }
            break;

        case 3:
            if (personagem1 !== null) {
                let novoAtk = +teclado("Insira o novo valor de ataque: ");
                personagem1.atk = novoAtk;
                console.log("Ataque do personagem atualizado:", personagem1.atk);
            }
            break;

        case 4:
            if (personagem1 !== null) {
                let novaDef = +teclado("Insira o novo valor de defesa: ");
                personagem1.def = novaDef;
                console.log("Defesa do personagem atualizada:", personagem1.def);
            }
            break;

        case 5:
            if (personagem1 !== null) {
                let novaEnergia = +teclado("Insira o novo valor de energia: ");
                personagem1.energia = novaEnergia;
                console.log("Energia do personagem atualizada:", personagem1.energia);
            }
            break;

        case 6:
            if (personagem1 !== null) {
                let novaVida = +teclado("Insira o novo valor de vida: ");
                personagem1.vida = novaVida;
                console.log("Vida do personagem atualizada:", personagem1.vida);
            }
            break;

        case 7:
            if (personagem1 !== null) {
                personagem1.nome = "";
                personagem1.vida = 0;
                personagem1.energia = 0;
                personagem1.atk = 0;
                personagem1.def = 0;
                console.log("Status do personagem zerados.");
            }
            break;

        case 8:
            if (personagem1 !== null) {
                console.log("Personagem:");
                console.log("Nome:", personagem1.nome);
                console.log("Vida:", personagem1.vida);
                console.log("Energia:", personagem1.energia);
                console.log("Ataque:", personagem1.atk);
                console.log("Defesa:", personagem1.def);
            }
            break;
    }
}
