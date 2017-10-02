class Paciente {
    constructor(nome, idade, peso, altura){
        this._nome = nome;
        this._idade = idade;
        this._peso = peso;
        this._altura = altura;
    }

    get nome() { return this._nome;}
    get idade() { return this._idade;}
    get altura() { return this._altura;}
    get peso() { return this._peso;}

    get imc() {
        return this._peso / (this._altura * this._altura);
    }

    get batimentos() {
        return this._idade * 365 * 24 * 60 * 80;
    }

    imprime() {
        alert (`${this._nome} tem ${this._idade}`)
    }
}