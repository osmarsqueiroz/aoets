import Atributo from './Atributo';

export default class Ataque extends Atributo {
	constructor(valor: number) {
		super();
		this.setValor(valor);
	}
}
