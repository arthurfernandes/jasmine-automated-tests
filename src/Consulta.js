class Consulta {
    constructor(paciente, procedimentos, particular, retorno) {
        this._paciente = paciente;
        this._procedimentos = procedimentos;
        this._particular = particular;
        this._retorno = retorno;
    }

    get preco() {
        if (this._retorno) return 0;

        let precoFinal = 0;

        this._procedimentos.forEach( procedimento =>  {
            if (procedimento == "raio-x") precoFinal += 55;
            else if (procedimento == "gesso") precoFinal += 32;
            else precoFinal += 25;
        });

        if (this._particular)
            precoFinal *= 2;

        return precoFinal;
    }
}