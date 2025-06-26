const readline = require("readline");
const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

class Player {
    constructor(NOME, VELOCIDADE, MANOBRABILIDADE, PODER) {
        this.NOME = NOME;
        this.VELOCIDADE = VELOCIDADE;
        this.MANOBRABILIDADE = MANOBRABILIDADE;
        this.PODER = PODER;
        this.PONTOS = 0; // Inicializa os pontos do jogador
    }
}

let players = [
    new Player("Mario", 4, 3, 3),
    new Player("Peach", 3, 4, 2),
    new Player("Yoshi", 2, 4, 3),
    new Player("Bowser", 5, 2, 5),
    new Player("Luigi", 3, 4, 4),
    new Player("Donkey Kong", 2, 2, 5),
]

/*const player1 = {
  NOME: "Mario",
  VELOCIDADE: 4,
  MANOBRABILIDADE: 3,
  PODER: 3,
  PONTOS: 0,
};

const player2 = {
  NOME: "Luigi",
  VELOCIDADE: 3,
  MANOBRABILIDADE: 4,
  PODER: 4,
  PONTOS: 0,
};*/

async function rollDice() { // Gira um dado de 1-6
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() { // Sorteia o tipo de rodada com aprox 33% de chance para cada bloco
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "RETA";
      break;
    case random < 0.66:
      result = "CURVA";
      break;
    default:
      result = "CONFRONTO";
  }

  return result;
}

async function sortPunishment() {
    let random = Math.random();

    if (random < 0.5) {
        return "CASCO";
    } else {
        return "BOMBA";
    }
}

async function sortTurbo() {
    let random = Math.random();

    if (random < 0.5) {
        return false;
    } else {
        return true;
    }
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function handleConflictResult(winner, loser) {
  let punishment = await sortPunishment();
  let turbo = await sortTurbo();
  let points = 0;

  if (punishment === "CASCO") {
    console.log(`${loser.NOME} recebeu um casco! 🐢`);
    points = 1; // Perde 1 ponto se receber um casco
  } else {
    console.log(`${loser.NOME} recebeu uma bomba! 💣`);
    points = 2; // Perde 2 pontos se receber uma bomba
  }

  switch(loser.PONTOS) {
    case 0:
      console.log(`${winner.NOME} venceu o confronto! ${loser.NOME} permaneceu com 0 pontos 🐢`);
      break;
    case 1:
      console.log(`${winner.NOME} venceu o confronto! ${loser.NOME} perdeu 1 ponto 🐢`);
      loser.PONTOS--;
      break;
    default:
      console.log(`${winner.NOME} venceu o confronto! ${loser.NOME} perdeu ${points} ponto(s) 🐢`);
      loser.PONTOS -= points;
  }

    if (turbo) {
        console.log(`${winner.NOME} ganhou um turbo (+1 ponto)! 🚀`);
        winner.PONTOS++; // Ganha 1 ponto se ganhar turbo
    } else {
        console.log(`${winner.NOME} não ganhou turbo desta vez.`);
    }
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    // sortear bloco
    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    // rolar os dados
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();

    //teste de habilidade
    let totalTestSkill1 = 0;
    let totalTestSkill2 = 0;

    if (block === "RETA") {
      totalTestSkill1 = diceResult1 + character1.VELOCIDADE;
      totalTestSkill2 = diceResult2 + character2.VELOCIDADE;

      await logRollResult(
        character1.NOME,
        "velocidade",
        diceResult1,
        character1.VELOCIDADE
      );

      await logRollResult(
        character2.NOME,
        "velocidade",
        diceResult2,
        character2.VELOCIDADE
      );
    }else if (block === "CURVA") {
      totalTestSkill1 = diceResult1 + character1.MANOBRABILIDADE;
      totalTestSkill2 = diceResult2 + character2.MANOBRABILIDADE;

      await logRollResult(
        character1.NOME,
        "manobrabilidade",
        diceResult1,
        character1.MANOBRABILIDADE
      );

      await logRollResult(
        character2.NOME,
        "manobrabilidade",
        diceResult2,
        character2.MANOBRABILIDADE
      );
    }else if (block === "CONFRONTO") {
      let powerResult1 = diceResult1 + character1.PODER;
      let powerResult2 = diceResult2 + character2.PODER;

      console.log(`${character1.NOME} confrontou com ${character2.NOME}! 🥊`);

      await logRollResult(
        character1.NOME,
        "poder",
        diceResult1,
        character1.PODER
      );

      await logRollResult(
        character2.NOME,
        "poder",
        diceResult2,
        character2.PODER
      );

      if (powerResult1 > powerResult2) {
        await handleConflictResult(character1, character2);
      }else if (powerResult2 > powerResult1) {
        await handleConflictResult(character2, character1);
      }else {
        console.log("Confronto empatado! Nenhum ponto foi perdido");
      }
    }

    // verificando o vencedor
    if (totalTestSkill1 > totalTestSkill2) {
      console.log(`${character1.NOME} marcou um ponto!`);
      character1.PONTOS++;
    } else if (totalTestSkill2 > totalTestSkill1) {
      console.log(`${character2.NOME} marcou um ponto!`);
      character2.PONTOS++;
    }else if (totalTestSkill1 > 0) {
        console.log("Empate! Nenhum ponto foi marcado nesta rodada.");
    }

    console.log(`${character1.NOME} ${character1.PONTOS} x ${character2.PONTOS} ${character2.NOME}`);
    console.log("-----------------------------");
  }
}

async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.NOME}: ${character1.PONTOS} ponto(s)`);
  console.log(`${character2.NOME}: ${character2.PONTOS} ponto(s)`);

  if (character1.PONTOS > character2.PONTOS)
    console.log(`\n${character1.NOME} venceu a corrida! Parabéns! 🏆`);
  else if (character2.PONTOS > character1.PONTOS)
    console.log(`\n${character2.NOME} venceu a corrida! Parabéns! 🏆`);
  else console.log("A corrida terminou em empate");
}

async function selectPlayers() {
    for (let i = 0; i < players.length; i++) {
        console.log(`${i + 1}. ${players[i].NOME} (Velocidade: ${players[i].VELOCIDADE}, Manobrabilidade: ${players[i].MANOBRABILIDADE}, Poder: ${players[i].PODER})`);
    }


    return new Promise((resolve) => {rl.question(
      "Escolha o Jogador 1 (digite o número): ",
      (index1) => {
        index1 = parseInt(index1 - 1); // Ajusta o índice para ser zero-based
        if (index1 < 0 || index1 >= players.length) {
          console.log("\nValor inválido! Tente novamente.");
          resolve(selectPlayers());
        } else {
            const player1 = players[index1];
            console.log(`Você escolheu: ${player1.NOME}`);
          rl.question(
            "Escolha o Jogador 2 (digite o número): ",
            (index2) => {
              index2 = parseInt(index2 - 1); // Ajusta o índice para ser zero-based
              if (index2 < 0 || index2 >= players.length) {
                console.log("\nValor inválido! Tente novamente.");
                resolve(selectPlayers());
              }else if (index1 === index2) {
                console.log("\nJogador não pode ser o mesmo do Jogador 1. Tente novamente.");
                resolve(selectPlayers());
              } else {
                rl.close();
                const player2 = players[index2];
                console.log(`Você escolheu: ${player2.NOME}`);
                resolve({ player1, player2 });
              }
            }
          );
        }
      }
    )});
}

(async function main() {
    console.log(" Simulador de Corrida Mario Kart 🏎️\n");
    const { player1, player2 } = await selectPlayers();

    console.log(
    `🏁🚨 Corrida entre ${player1.NOME} e ${player2.NOME} começando...\n`
    );

    await playRaceEngine(player1, player2);
    await declareWinner(player1, player2);
})();