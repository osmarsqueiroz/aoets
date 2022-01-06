import IAtributo from '../IAtributo';

export default abstract class Atributo implements IAtributo {
	valor: number = 0;

	getNome(): string {
		return this.constructor.name;
	}

	setValor(valor: number): void {
		this.valor = valor;
	}
	getValor(): number {
		return this.valor;
	}
}
