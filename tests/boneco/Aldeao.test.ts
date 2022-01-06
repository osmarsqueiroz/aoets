import Vida from '../../src/atributo/Vida';
import Aldeao from '../../src/boneco/Aldeao';
import Coletor from '../../src/tipo/Coletor';

test('O aldeão deveria ter um nome', () => {
	const nome = 'Marco Silva';
	const aldeao = new Aldeao(nome);

	expect(aldeao.getNome()).toBe(nome);
});

test('o aldeão é do tipo "Coletor"', () => {
	const nome = 'Marco Silva';
	const aldeao = new Aldeao(nome);
	expect(aldeao.getTipo()).toBe(Coletor.name);
});

test('o aldeão deveria ter o atributo "Vida"', () => {
	const nome = 'Marco Silva';
	const aldeao = new Aldeao(nome);
	const atributoVida = aldeao.getAtributo(Vida.name);

	expect(atributoVida?.getNome()).toBe(Vida.name);
});
