import Atributo from './Atributo';

export default class Madeira extends Atributo {
	constructor(valor: number) {
		super();
		this.setValor(valor);
	}
}
