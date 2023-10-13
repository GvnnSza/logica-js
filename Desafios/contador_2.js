
let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    // ! Ao decrementar o valor da variável contadora a cada iteração, eventualmente ela vai ser menor ou igual a 0, o que vai parar a execução do loop.
    contador--;
}

let media = soma / qtdNumeros;

console.log(media);
