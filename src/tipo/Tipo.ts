import Atributo from '../atributo/Atributo';
import ITipo from '../ITipo';

export default abstract class Tipo implements ITipo {
	private nome: string;
	listaAtributos: Map<string, Atributo>;

	constructor(nome: string) {
		this.nome = nome;
		this.listaAtributos = new Map();
	}

	getNome(): string {
		return this.nome;
	}

	setAtributo(atributo: Atributo): void {
		this.listaAtributos?.set(atributo.getNome(), atributo);
	}
	getAtributo(nome: string): Atributo | null {
		return this.listaAtributos.get(nome) || null;
	}
	getAtributos(): Map<string, Atributo> {
		return this.listaAtributos;
	}
}
