import Alimento from '../atributo/Alimento';
import { Recurso } from './Recurso';

export default class ArbustoFrutas extends Recurso {
	constructor() {
		super(new Alimento(50));
	}
}
