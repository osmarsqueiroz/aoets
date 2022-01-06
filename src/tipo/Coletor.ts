import Ataque from '../atributo/Ataque';
import Carga from '../atributo/Carga';
import Defesa from '../atributo/Defesa';
import Velocidade from '../atributo/Velocidade';
import Vida from '../atributo/Vida';
import Tipo from './Tipo';

export default class Coletor extends Tipo {
	constructor() {
		super('Coletor');
		this.setAtributo(new Vida(40));
		this.setAtributo(new Ataque(3));
		this.setAtributo(new Defesa(3));
		this.setAtributo(new Velocidade(0.3));
		this.setAtributo(new Carga(10));
	}
}
