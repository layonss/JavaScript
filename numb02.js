let C, N, E, F, o      //C= salario base'500, N= Horas, E= Excesso, F = funcionário, SO= formula C+E*20
F = prompt ("Código do funcionário: ");
N = prompt ("Horas trabalhadas: ");
C = 50 * 10
E = N - 50
o = C + E*20
if (N > 50){
    alert ("\nFuncionário: " + F + "\nTeve a carga horária de: " + N + "horas e receberá: R$" + o);
}else{
    alert ("Salário total: " + C + "\nNão houve extra.");
}