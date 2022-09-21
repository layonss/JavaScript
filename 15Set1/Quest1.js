/*1 - Criar uma função para calcular a 
porcentagem de um número*/

let c,p, resultado
p = prompt ("Digite a porcentagem desejada: ");
c = prompt ("digite o número que deseja calcular: ");

function porcentagem (c, p){
    resultado = (parseInt(c) * (parseInt (p))) / 100;
    return resultado;
}
alert ( "a porcentagem de " + c + "\né: " + porcentagem (c,p));
