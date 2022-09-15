let num = 0.0, x 
for (num = 0; num <= 500; num++){
    if(num % 2 !=0 && num % 3 == 0){
        x = x+num
        alert (num)
    }
}
alert("A soma de todos os números impares e divisiveis por 3 \nde 1 a 500 é: " + num);