let IP 
IP = prompt("Qual o indice de poluição: ");
if(IP >=0.05 & IP<=0.25){
    alert("Nivel de poluição: Aceitavel!");
}else if (IP >=0.3 & IP <=0.4){
    alert ("Risco para as industrias do grupo 1º!");
}else if (IP >=0.4 & IP <=0.5){
    alert ("Risco para as industrias do 1º e 2º grupo!");
}else{
alert ("\nAlerta!! \nIndustrias dos grupos 1,2 e 3 devem PARALIZAR suas atividades!")}; 