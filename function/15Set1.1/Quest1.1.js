let n1, n2, n3, resultMax,resultMin
n1 = prompt ("Digite um número: ")
n2 = prompt ("Digite um número: ")
n3 = prompt ("Digite um número: ")

function numMaior(n1,n2,n3){
resultMax = Math.max (n1,n2,n3);
return resultMax
}

function numMenor(n1,n2,n3){
   resultMin  = Math.min (n1,n2,n3);
    return resultMin
}
alert ("o maior número é: " + numMaior(n1,n2,n3))
alert ("o menor número é: " + numMenor(n1,n2,n3))