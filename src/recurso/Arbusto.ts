import Madeira from '../atributo/Madeira';
import { Recurso } from './Recurso';

class Arbusto extends Recurso {
	constructor() {
		super(new Madeira(40));
	}
}
