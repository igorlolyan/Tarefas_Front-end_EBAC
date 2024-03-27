const redesSociais = ['Facebook', 'Instagram', 'Twitter'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}





// A mesma coisa do for, porem com forEach
// O método forEach() executa uma dada função em cada elemento de um array.
redesSociais.forEach(function(nomeDaRedeSocial, indice){
    console.log(`#${indice} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const alunos = ['Gustavo', 'Julia', 'Paula', 'Wagner'];





// Map é bastante utilizado quando estiver utilizando api's
const alunos2 = alunos.map(function(itemAtual){
    return {
        nome: itemAtual,
        curso: 'Frontend'
    }
})
console.log(alunos2)





const numeros = [1,2,3,4,5]
const dobroDosNumeros = numeros.map(function(numeroAtual){
    return numeroAtual * 2;
})

console.log(dobroDosNumeros)





const paula = alunos2.find(function(item){
    return item.nome == 'Paula' // true ou false
})
// Quando não acha retorna undefined
console.log(paula)

const indiceDaPaula = alunos2.findIndex(function(item){
    return item.nome == 'Paula' // true ou false
})
// Quando não acha retorna -1
console.log(indiceDaPaula)

//every
// O método every() testa se todos os elementos do array passam pelo teste implementado pela função fornecida. Este método retorna um valor booleano.
alunos2.push({
    nome: 'Lucio',
    curso: 'Backend'
})
const todosAlunosSaoDeFrontend = alunos2.every(function(item){
    return item.curso === 'Frontend'
})
console.log(todosAlunosSaoDeFrontend)

//some verifica se tem pelo menos um.
const existeAlgumAlunoDeBackend = alunos2.some(function(item){
    return item.curso === 'Backend' && item.curso === 'Frontend'
})
console.log(existeAlgumAlunoDeBackend)


function filtraAlunosDeBackend(aluno) {
    return aluno.curso === 'Backend';
}
// Também pode ser escrito com arrow function
const filtraAlunosDeBackend2 = (aluno) => aluno.curso === 'Backend';

const alunosDeBackend = alunos2.filter(filtraAlunosDeBackend)
console.log(alunosDeBackend)

const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual){
    acumulador += itemAtual;
    return acumulador
}, 0)

console.log(soma);


// A mesma coisa agora com for

let somaComFor = 0;

for (let i = 0; i<nums.length; i++) {
    somaComFor += nums[i]
}
console.log(somaComFor)


const nomeDosAlunos = alunos2.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `
    return acumulador;
}, '')
console.log(nomeDosAlunos)