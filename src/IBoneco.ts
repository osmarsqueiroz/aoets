import Atributo from './atributo/Atributo';
import IAtributo from './IAtributo';
import ITipo from './ITipo';

export default interface IBoneco {
	nome: string;
	tipo: ITipo;
	getNome(): string;
	getTipo(): string;
	getAtributo(nome: string): IAtributo | null;
	setAtributo(atributo: Atributo): void;
}
