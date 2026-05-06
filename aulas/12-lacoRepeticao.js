//           Laço de Repetição - FOR (PARA)
// O professor te colocou de castigo e pediu para voccê escrever mil vezes a frase
// "Eu vou prestar atenção ás aulas e anotar tudo!"

// let i = 0 => primeiro utilizo uma variável de controle
// i < 1000 => condição da repetição
// i++ => aumenta a variável de controle para não travar e somar
for (let i = 0; i < 1000; i++) { 
console.log("Eu vou prestar atenção ás aulas e anotar tudo!");
}

// Escrever todos os números de 1 a 20
for (let i = 1; i <= 20; i++) {
console.log(i);  
}

// Escreva todos os números pares entre 1 e 20
for (let i = 0; i <= 20; i+=2) {
    console.log(i);  
}

// outra solução de números pares
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) console.log(i);
    // % => resto da divisão
    // i % 2 == 0 => se o resto da divisãode i por 2 for 0, ele mostra i
}

console.log("--------------------------------")
// Dado um vetor, calcule e exiba o somatório de seus elementos
let numeros = [ 5, 6, 8, 14, 0, 6, 9, 7, 2];
let soma =
 0;

 console.log(numeros.length) // numeros.length
     //numeros.length => mostra a quantidade de itens do array

     for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
}
console.log(soma);

// laco de repeticao - while / Do while 
// -------------------------------------
// while testa a condicao antes de entrar no laco de repeticao
// ASe a condicao for inicialmente falsa, o laco nao é executado nenhuma vez.
var x = 10;

while (x > 10) {
    console.log("Entrei no laco while...");
    x = 0;
}
console.log("Terminei!");

// Somar enquanto (while) menor que 10
var somar = 0; // variavel para armazenar a soma dos numeros
var num = 0; // variavel para aumentar de 1 em 1

while (soma < 10){
    soma += num; // somo o numero atual com o que ja existe na variavel
    num++;       // variavel de controle para o while funcionar
    console.log('somando...' ,somar);
    console.log('Numero...',num);
}

for (let i = 0; i < 10; i++) {  
}

var i = 0 
 while (i < 10) {
    i++
}