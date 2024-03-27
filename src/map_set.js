let meuMap = new Map();
meuMap.set('nome', 'igor');
meuMap.set('stack', 'html, css, js')

console.log(meuMap);

const nome = meuMap.get('nome');

console.log(nome);

console.log(meuMap.size)

console.log(meuMap.has('sobrenome'))

// meuMap.clear()

console.log(meuMap.size)

for (let chave of meuMap.keys()) {
    console.log(chave);
}

for (let valor of meuMap.values()) {
    console.log(valor);
}

for (let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete('stack');

console.log(meuMap)

// [nome => igor]
// [stack => HTMLAllCollection, css, js]

const cpfs = new Set();

cpfs.add('01114630098')
cpfs.add('28248205002')
cpfs.add('15017940006')

console.log(cpfs)

console.log(cpfs.keys())
console.log(cpfs.values())

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Gian Souza', 'José Paulo', 'Maria Isabel', 'Luana', 'Luana', 'Gian Souza']

const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = {...arrayComoSet}

console.log(arrayComoSet)
console.log(arraySemItensDuplicados)