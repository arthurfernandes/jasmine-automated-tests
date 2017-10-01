class MaiorEMenor {
	constructor() {
		this._maior = Number.NEGATIVE_INFINITY;
		this._menor = Number.POSITIVE_INFINITY;
	}
	
	encontra(lista) {
		lista.forEach( elem => {
			if ( elem < this._menor ) this._menor = elem;
			else if ( elem > this._maior ) this._maior = elem;
		});
	}

	get maior() {
		return this._maior;
	}

	get menor() {
		return this._menor;
	}
}