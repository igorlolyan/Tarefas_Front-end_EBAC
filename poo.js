// Classe Abstrata Animal
class Animal {
    // Construtor
    constructor(especie, nome) {
        this._especie = especie; // Atributo protegido "_especie" para armazenar a espécie do animal
        this.nome = nome; // Atributo "nome" para armazenar o nome do animal
    }
    // Getters & Setters para o atributo protegido "_especie"
    getEspecie () {
        return this._especie; // Método getter para obter o valor da espécie
    }
    setEspecie (novaEspecie) {
        this._especie = novaEspecie; // Método setter para definir um novo valor para a espécie
    }
    // Métodos
    fazerBarulho() {
        console.log(`O ${this.getEspecie()} ${this.nome} faz um barulho.`); // Método para fazer o animal emitir um som
    }
    comer() {
        console.log(`O ${this.getEspecie()} ${this.nome} está comendo.`); // Método para simular o ato de comer do animal
    }
}

// Sub Classe 1 Herda Animal
class Cachorro extends Animal {
    // Construtor
    constructor(nome, raca) {
        super('Cachorro', nome); // Chama o construtor da classe pai passando "Cachorro" como espécie
        this.raca = raca; // Atributo "raca" para armazenar a raça do cachorro
    }
    // Métodos
    abanarRabo() {
        console.log(`O ${this.getEspecie()} ${this.nome} da raça ${this.raca} está abanando o rabo.`); // Método específico para cachorros
    }
}

// Sub Classe 2 Herda Animal
class Gato extends Animal {
    // Construtor
    constructor(nome, cor) {
        super('Gato', nome); // Chama o construtor da classe pai passando "Gato" como espécie
        this.cor = cor; // Atributo "cor" para armazenar a cor do gato
    }
    // Métodos
    arranharMoveis() {
        console.log(`O ${this.getEspecie()} ${this.nome} de cor ${this.cor} está arranhando os móveis.`); // Método específico para gatos
    }
}

// Instanciando 3 objetos, 2 do tipo Gato e 1 do tipo Cachorro, mas todos herdam de Animal
const cachorro1 = new Cachorro('Rex', 'Labrador'); // Cria uma instância de um cachorro com nome "Rex" e raça "Labrador"
const gato1 = new Gato('Whiskers', 'Branco'); // Cria uma instância de um gato com nome "Whiskers" e cor "Branco"
const gato2 = new Gato('Garfield', 'Laranja'); // Cria uma instância de um gato com nome "Garfield" e cor "Laranja"