import Atributo from './Atributo';

export default class Velocidade extends Atributo {
	constructor(valor: number) {
		super();
		this.setValor(valor);
	}
}
