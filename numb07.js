let bas,alt,area
bas = prompt ("Digite o valor da base: ");
alt = prompt ("Digite o valor da altura: ");
area = bas*alt/2
if (bas>0 && alt>0){
    alert ("A area do triangulo vale: " + area);
}else{
    alert ("Impossivel informar.");
}