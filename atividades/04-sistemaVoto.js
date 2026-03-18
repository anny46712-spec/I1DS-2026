/****************************************************
          Atividade / desafio
/****************************************************/
/*
    Crie uma função que receba a idade de uma pessoa e retorne uma frase dizendo se ela pode votar ou não e se o voto é obrigatótrio ou opicional.
*/

function podeVotar(idade) {
  let resultado;
  if (idade < 16) {
    resultado = "Não pode votar";
  } else if ((idade >= 16 && idade < 18) || idade >= 70) {
    resultado = "Voto opcional";
  } else if (idade >= 18) {
    resultado = "Voto obrigatório";
  }
  return resultado;
}

let voto = podeVotar(10);
console.log(voto);
let voto2 = podeVotar(16);
console.log(voto2);
let voto3 = podeVotar(18);
console.log(voto3);
let voto4 = podeVotar(70);
console.log(voto4);

console.log("")
/*****************************************************
Lista de Exercícios
****************************************************/
/*
Crie uma função que receba a nota de um aluno e
retorne uma mensagem informando sua situação.


    Considere as seguintes regras:


        Nota menor que 5: reprovado
        Nota entre 5 e 6.9: recuperação
        Nota igual ou maior que 7: aprovado


    A função deve retornar uma frase indicando a situação do aluno.
*/

function notaAluno(nota) {
  let resultado;
  if (nota < 5) {
    resultado = "Reprovado";
  } else if (nota >= 5 && nota < 6.9) {
    resultado = "Terá que fazer Recuperação";
  } else if (nota >= 7) {
    resultado = "Aprovado";
  }
  return resultado;
}

let nota = notaAluno(4);
console.log("Você tirou 4. resultado final:", nota);
let nota2 = notaAluno(5);
console.log("Você tirou 5. resultado final:", nota2);
let nota3 = notaAluno(6.5);
console.log("Você tirou 6.5. resultado final:", nota3);
let nota4 = notaAluno(7);
console.log("Você tirou 7. resultado final:", nota4);

//Parte 01 - Início da resolução do exercicio
function verificarSituacao(nota) {
  if (nota < 5) {
    return "Reprovado";
  } else if (nota < 7) {
    return "Recuperação";
  } else {
    return "Aprovado";
  }
}

console.log(verificarSituacao(5));
console.log(verificarSituacao(7));

//Parte 02 - solução + parte extra
function situacaoFinal(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;

  if (media < 5) {
    return "Reprovado";
  } else if (media < 7) {
    return "Recuperação";
  } else {
    return "Aprovado";
  }
}
console.log(situacaoFinal(7, 8, 6, 5));

console.log("-------------------------------------------");
console.log("              Solução 03                   ");
console.log("-------------------------------------------");

function final(n1, n2, n3, n4) {
  let media = (n1 + n2 + n3 + n4) / 4;
  let situacao;

  if (media < 5) situacao = "Reprovado";
  else if (media < 7) situacao = "Recuperação";
  else situacao = "Aprovado";

  return "Média: " + media + " - Situação " + situacao;
}

console.log(final(7, 8, 6, 5));
