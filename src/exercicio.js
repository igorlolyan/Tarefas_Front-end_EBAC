const alunos = [
    {nome: 'Igor', nota: 10},
    {nome: 'Pablo', nota: 7},
    {nome: 'Geraldo', nota: 4},
    {nome: 'Francisco', nota: 8},
    {nome: 'Gabriel', nota: 1},
    {nome: 'Sandra', nota: 3},
    {nome: 'Queta', nota: 6}
]

const aprovados = [];

for (let i = 0; i < alunos.length; i++) {

    if (alunos[i].nota >= 6) {
        aprovados.push(alunos[i].nome)
    }
}

console.log(`Os alunos aprovados são ${aprovados}`)

// // Função para retornar apenas os alunos com nota maior ou igual a 6
// function alunosAprovados(x) {
//     return x.filter(aluno => aluno.nota >= 6);
// }

// // Função para retornar apenas os alunos com nota maior ou igual a 6
// function alunosReprovados(y) {
//     return y.filter(aluno => aluno.nota < 6);
// }

// // Chamando a função e armazenando o resultado em uma variável
// const alunosAprovadosArray = alunosAprovados(alunos);
// const alunosReprovadosArray = alunosReprovados(alunos);

// // Exibindo os alunos aprovados
// console.log("Alunos aprovados:");
// console.log(alunosAprovadosArray);

// // Exibindo os alunos reprovados
// console.log("Alunos rerovados:");
// console.log(alunosReprovadosArray);