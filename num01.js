let p, x, m //x = excesso
p = prompt ("Digite o Peso: ");
x = p - 50
m = x*4
if (p>50){
    alert ("\nLimite ultrapassado em: "+ x + "kg" + "\nmulta no valor de: R$ "+ m);
}else{
    alert ("\nNão será multado");
}