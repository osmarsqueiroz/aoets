import Atributo from '../../src/atributo/Atributo';
import Ouro from '../../src/atributo/Ouro';
import Vida from '../../src/atributo/Vida';
import Coletor from '../../src/tipo/Coletor';

test('O nome do tipo deveria ser "Coletor"', () => {
	const coletor = new Coletor();
	expect(coletor.getNome()).toBe(coletor.constructor.name);
});

test('Verificando se o Coletor tem o atributos', () => {
	const coletor = new Coletor();
	const listaAtributos = coletor.getAtributos();
	console.log(listaAtributos);
	expect(listaAtributos.size).toBeGreaterThan(4);
});

test('Verificando se o Coletor tem o atributo "Vida"', () => {
	const coletor = new Coletor();
	const vida = coletor.getAtributo(Vida.name);
	expect(vida?.getNome()).toBe(Vida.name);
});

test('o Coletor não tem atributos de "Ouro"', () => {
	const coletor = new Coletor();
	const ouro = coletor.getAtributo(Ouro.name);
	console.log(ouro);
	expect(ouro).toBeNull();
});

test('Verificando se o atributo "Vida" tem o valor 40', () => {
	const coletor = new Coletor();
	const vida = coletor.getAtributo(Vida.name);
	expect(vida?.getNome()).toBe(Vida.name);
	expect(vida?.getValor()).toBe(40);
});

test('O Coletor pode ter o valor da vida alterado para + 10', () => {
	const coletor = new Coletor();
	const atributoVida = coletor.getAtributo(Vida.name);
	const valorVidaAtual = atributoVida?.getValor() || 0;
	const valorVidaNova = valorVidaAtual + 10;
	atributoVida?.setValor(valorVidaNova);

	coletor.setAtributo(<Atributo>atributoVida);

	const novaVida = coletor.getAtributo(Vida.name);
	expect(novaVida?.getValor()).toBe(valorVidaNova);
});
