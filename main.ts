import { Pessoa } from "./src/pessoa";
// import { ContaBanco } from "./src/contabanco"; 

let pessoa1 = new Pessoa (); // mesmo Pessoa da class. / criando uma variavel pra que o class faça um objeto. só cabe um objeto dentro de uma classe.

pessoa1.nome = "Debora";
pessoa1.cpf = "235.568.695-38"; // é string por conta dos pontos e o traço. caracteres especiais.
pessoa1.idade = 18;
pessoa1.telefone = "(21)c9999-9999"; // mesmo caso de cpf

console.log(`O nome da pessoa é: ${pessoa1.nome}`); //outro meio de se chamar a atribuição.*/

// let conta1 = new ContaBanco("Liza","005-4","12345-5",500);

/*conta1.saldo = 0;
console.log (conta1.saldo)


console.log(conta1.saldo);*/