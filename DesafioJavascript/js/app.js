const nome = prompt("Qual o nome do aluno?: ");
let nota = Number(prompt("Qual a nota do aluno?: "));
let nota2 = Number(prompt("Qual a segunda nota do aluno?: "));

media = (nota + nota2) / 2;

if (media >= 6) {
    alert("Parabéns! Sua nota foi ótima");

} else {
    alert("Não atingiu o nível necessário");
}