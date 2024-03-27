"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
    }
    dizOla() {
        return `${this.nome} disse oi`;
    }
}
class ContaBancaria {
    constructor(numeroDaConta) {
        this.saldo = 0;
        this.numerConta = numeroDaConta;
    }
    retornaNumeroDoBanco() {
        return 125;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo = valor;
    }
}
class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaDoPedro = new ContaBancariaPessoaFisica(123456);
// contaDoPedro.
contaDoPedro.retornaNumeroDoBanco();
