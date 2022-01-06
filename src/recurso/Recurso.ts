import Atributo from '../atributo/Atributo';
import IRecurso from '../IRecurso';

export abstract class Recurso implements IRecurso {
	atributo: Atributo;
	constructor(atributo: Atributo) {
		this.atributo = atributo;
	}

	getAtributo(): Atributo {
		return this.atributo;
	}
}
