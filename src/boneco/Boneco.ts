import { timeStamp } from 'console';
import Atributo from '../atributo/Atributo';
import IAtributo from '../IAtributo';
import IBoneco from '../IBoneco';
import ITipo from '../ITipo';

export default class Boneco implements IBoneco {
	nome: string;
	tipo: ITipo;
	getNome(): string {
		return this.nome;
	}
	getTipo(): string {
		return this.tipo.getNome();
	}
	getAtributo(nome: string): IAtributo | null {
		return this.tipo.getAtributo(nome);
	}

	setAtributo(atributo: Atributo): void {
		this.tipo.setAtributo(atributo);
	}
}
