import Madeira from '../atributo/Madeira';
import { Recurso } from './Recurso';

export default class Arbusto extends Recurso {
	constructor() {
		super(new Madeira(40));
	}
}
