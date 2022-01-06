import Atributo from './Atributo';

export default class Pedra extends Atributo {
	constructor(valor: number) {
		super();
		this.setValor(valor);
	}
}
