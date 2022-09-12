let n1, n2, n3, n4, q1, q2, q3, q4
n1 = prompt ("Digite o Primeiro Número: ");
n2 = prompt ("Digite o Segundo Número: ");
n3 = prompt ("Digite o Terceiro Número: ");
n4 = prompt ("Digiete o Quarto Número: ");
q1 = n1*n1;
q2 = n2*n2;
q3 = n3*n3;
q4 = n4*n4;

if (q3 >= 1000){
    alert("\nQuadrado de " + n3 + "\né igual " + q3);
}else{
    alert ("\nQuadrado de " + n1 + "\né igual " + q1);
    alert ("\nQuadrado de " + n2 + "\né igual " + q2);
    alert ("\nQuadrado de " + n3 + "\né igual " + q3);
    alert ("\nQuadrado de " + n4 + "\né igual " + q4);
}