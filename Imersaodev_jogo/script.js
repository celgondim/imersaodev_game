// Declaração de Variável
var numeroSecreto = parseInt(Math.random() * (1001 - 1) + 1);
//var numeroSecreto = 10;
var count = 0;
const LIMITE = 10;
const END = "sair";
const MET = 2;

// Função para conectar a ação do botão  com o JS. Start do jogo.
function Jogar() {

    // Enquando chute não for igual a numeroSecreto, repita a lógica abaixo
  while (chute != numeroSecreto) {
    var chute = prompt(
      "Digite um número entre 1 e 1000 ou digite 'sair' para finalizar o jogo."
    );

    // Verifica se foi digitado a palavra 'sair' para finalizar o jogo
    if (chute == END) {
      alert("Game Over!");
      break;
    } else if (chute == null) {
      alert("Game Over!");
      break;
    }

    // Contador
    count = count + 1;

    // Verifica se o numero digitado (palpite) é igual ou não ao valor do sistema
    if (chute == numeroSecreto) {
      alert(
        `Parabéns! Você acertou! \n \nO número secreto é  ${numeroSecreto}. \n \nVocê precisou de  ${count} tentativa(s) para acertar.`
      );
      break;
    } else if (chute > numeroSecreto) {
      alert(
        `Errou... O número secreto é menor do que ${chute}. \n \nTente novamente!`
      );
    } else {
      alert(`Errou... O número secreto é maior do que ${chute}. \n \nTente novamente!`);
    }

    // Se o contator for igual ao numero máx de tentativas (LIMITE), o jogo deve ser encerrado.
    if (count == LIMITE) {
      alert(
        `Não foi dessa vez! \nVocê teve ${count} tentativas e atingiu o limite máx. \n \nO número secreto era ${numeroSecreto}. \n \nReinicie o jogo para jogar novamente!`
      );
      break;
    } else if (count == LIMITE / MET) {
      var media = LIMITE / MET;
      alert(
        `Você está quase lá! \nAté agora você teve ${count} tentativas e lhe restam apenas mais ${media} tentativas.\n \nBoa Sorte!!!`
      );
    }
  }
}
