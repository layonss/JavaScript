let n1 = prompt("Digite o primeiro numero")
let n2 = prompt("Digite o segundo numero")
function Calculo(v1, v2) {
    return(v1 + " + " + v2 + " = " + (parseInt(v1)+parseInt(v2)) + 
    "\n" + v1 + " - " + v2 + " = " + (parseInt(v1)-parseInt(v2)) +
    "\n" + v1 + " * " + v2 + " = " + (parseInt(v1)*parseInt(v2)) +
    "\n" + v1 + " / " + v2 + " = " + (parseInt(v1)/parseInt(v2)).toFixed(2)
    );
}
console.log(Calculo(n1, n2));