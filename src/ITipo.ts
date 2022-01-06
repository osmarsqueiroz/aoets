import Atributo from './atributo/Atributo';
import IAtributo from './IAtributo';

export default interface ITipo {
	getNome(): string;
	setAtributo(atributo: IAtributo): void;
	getAtributos(): Map<string, IAtributo>;
	getAtributo(nome: string): Atributo | null;
}
