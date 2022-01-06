import Atributo from './Atributo';

export default class Alimento extends Atributo {
	constructor(valor: number) {
		super();
		this.setValor(valor);
	}
}
