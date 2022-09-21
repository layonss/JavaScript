let h, m
h = prompt("Digite a hora")
m = prompt("Digite o minuto")
function Convercao(dd1, dd2) {
    if(dd1 > 12 && dd1 < 24 && dd2 >= 0 && dd2 <= 59){
        return(dd1-12 + ":" + dd2 + " P.M.")
    }else if(dd1 <= 12 && dd2 >= 0 && dd2 <= 59){
        return(dd1 + ":" + dd2 + " A.M.")
    }else if(dd1 <= 0 || dd1 > 24 || dd2 <= 0 || dd2 > 59){
        return("Há algum valor invalido")
    }
}
alert(Convercao(h, m))