import { threadId } from 'worker_threads';
import Coletor from '../tipo/Coletor';
import Boneco from './Boneco';

export default class Aldeao extends Boneco {
	constructor(nome: string) {
		super();
		this.nome = nome;
		this.tipo = new Coletor();
	}
}
