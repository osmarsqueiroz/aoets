import Atributo from './atributo/Atributo';

export default interface IRecurso {
	atributo: Atributo;

	getAtributo(): Atributo;
	setAtributo(atributo: Atributo): void;
}
