let idade
idade = prompt ("Digite sua idade: ");
if (idade >=5 && idade <=7){
    alert ("\nClassificação: Infantil A");
}else if (idade >=8 && idade <=11){
    alert ("\nClassificação Infantil B");
}else if (idade >= 12 && idade <=13){
    alert ("\nClassificação: Juvenil A");
}else if (idade >=14 && idade <=17){
    alert ("\nClassificação: Juvenil B");
}else if (idade >=18){
    alert ("\nClassificação: Adultos");
}else{
    alert ("\nNão atendemos essa faixa etaria");
}
