/*4 - Crie uma um programa de saúde, nesse programa desenvolva uma função que calcula
o imc de pacientes, a função deverá receber os  seguintes parâmetros, peso e altura.*/

let imc, peso, altura
peso = prompt ("Digite sua peso: ")
altura = prompt ("Digite seu altura: ")

function SUS (peso, altura){
imc = parseFloat (peso) / (parseFloat (altura) * parseFloat (altura))
return imc
}
alert ("Seu imc é de: " + SUS (peso, altura))