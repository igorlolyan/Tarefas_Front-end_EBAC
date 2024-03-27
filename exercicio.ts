function multiplicacao(x: number, y: number) {
    return(x * y);
}
const resultadoMultiplicacao= multiplicacao(10, 15);
console.log(resultadoMultiplicacao)

function saudacao(a: string, nome: string){
    return(`${a}, ${nome}`)
}

const mostrarSaudacao = saudacao('Olá', 'Igor')
console.log(mostrarSaudacao)