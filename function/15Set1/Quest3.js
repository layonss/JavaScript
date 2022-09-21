/*3 - Criar uma função que converta uma 
temperatura de Fahrenheit para Celsius*/

let cel, fah, resultado
fah = prompt ("Digite os graus em Fahrenheit para serem convertidos: ")

function converção (cel, fah){
    resultado = (parseFloat (fah) -32) / 1.8
    return resultado
}
alert ("A converção é de: " +  converção (cel,fah)) 