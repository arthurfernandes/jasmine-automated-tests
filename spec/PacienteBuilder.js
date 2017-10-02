class PacienteBuilder {
    constructor(){
        this._nome = "Arthur";
        this._idade = 24;
        this._peso = 80;
        this._altura = 1.76;
    }

    constroi() {
        return new Paciente(this._nome, this._idade, this._peso, this._altura);
    }

    comNome(nome) {
        this._nome = nome;
        return this;
    }

    comIdade(idade) {
        this._idade = idade;
        return this;
    }

    comPeso(peso) {
        this._peso = peso;
        return;
    }
    
    comAltura(altura) {
        this._altura = altura;
    }
}