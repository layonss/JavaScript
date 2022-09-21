/*2 - Criar uma função que converta uma temperatura 
de Celsius para Fahrenheit*/

let cel, fah, resultado
cel = prompt ("Digite os graus celsius a serem convertidos: ")

function converção (cel, fah){
    resultado = (parseFloat (cel) * 1.8 + 32)
    return resultado
}
alert ("A converção é de: " +  converção (cel,fah))