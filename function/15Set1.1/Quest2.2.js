let ti, C
ti = prompt ("Digite o imposto expresso em porcentagem: ")
C = prompt("Digite o custo do item antes do imposto: ")


function somaImposto (taxaImposto, custo) {
    valor = parseFloat(custo) + (parseFloat(custo)*(parseFloat(taxaImposto)/100))
    return (alert("R$" +  parseFloat(custo).toFixed(2) + " + " + taxaImposto + "%" + 
    "\n valor de venda -> R$" + valor.toFixed(2)))
}
somaImposto(ti, C)