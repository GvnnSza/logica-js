alert('Boas Vindas ao jogo do numero secreto');

let numeroSecreto = parseInt(Math.random() * 100 + 1); // ! 100 + 1 = 101, ou seja, ele vai me dar um numero aleatorio de 0 a 100, mas como eu quero de 0 a 10, eu coloco 10 + 1 = 11
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero de 0 a 100')
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        tentativas++;
    }

}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Parabens, voce acertou o numero secreto ${numeroSecreto} depois de ${tentativas} ${palavraTentativa}`);

//?     ? = se = if -> tentativa esta sendo maior do que 1? se sim, escreva tentativas, se nao, escreva tentativa
//?     : = senao = else -> o acerto foi de primeira? se sim, escreva tentativa, se nao, escreva tentativas

// if (tentativas > 1) {
//     alert(`Parabens, voce acertou o numero secreto ${numeroSecreto} depois de ${tentativas} tentativas`);
// } else {
//     alert(`Parabens, voce acertou o numero secreto ${numeroSecreto} depois de ${tentativas} tentativa`);
// }

// ! else = enquanto = looping infinito
// ! console.log é uma ferramenta para o desenvolvimento, e nao para o usuario (HTML5)
// ! se chute for igual (==) ao numero secreto
// ! else = se nao

// ? -> CONTEUDO DE MATH.RANDOM

// ? Se eu usar Math.random() * 10, ele vai me dar um numero aleatorio de 0 a 9,9 e nao de 0 a 10 sendo inteiros e como eu desejo
// ? Para resolver esse problema so colocar o ParseInt atras do Math.random() * 10, e englobar ele dentro de () -> ParseInt(Math.random() * 10) e assim ele vai me dar um numero inteiro de 0 a 10

// * ParseInt = transforma o numero em inteiro