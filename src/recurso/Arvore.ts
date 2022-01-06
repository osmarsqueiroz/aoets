import Madeira from '../atributo/Madeira';
import { Recurso } from './Recurso';

export default class Arvore extends Recurso {
	constructor() {
		super(new Madeira(100));
	}
}
