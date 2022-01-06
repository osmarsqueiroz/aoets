import Atributo from './Atributo';

export default class Carga extends Atributo {
	constructor(valor: number) {
		super();
		this.setValor(valor);
	}
}
