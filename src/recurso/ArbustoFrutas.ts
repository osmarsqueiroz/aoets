import Alimento from '../atributo/Alimento';
import { Recurso } from './Recurso';

class ArbustoFrutas extends Recurso {
	constructor() {
		super(new Alimento(50));
	}
}
