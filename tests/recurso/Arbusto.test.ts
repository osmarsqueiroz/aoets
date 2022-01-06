import Madeira from '../../src/atributo/Madeira';
import Arbusto from '../../src/recurso/Arbusto';

test('O Arbusto deveria ter atributo "Madeira"', () => {
	const arbusto = new Arbusto();
	const atributo = arbusto.getAtributo();
	expect(atributo.getNome()).toBe(Madeira.name);
});

test('Diminuindo o total de madeira do arbusto', () => {
	const arbusto = new Arbusto();
	const madeira = arbusto.getAtributo();
	const totalMadeiraOriginal = madeira.getValor();
	const totalMadeiraAlterado = totalMadeiraOriginal - 10;

	madeira.setValor(totalMadeiraAlterado);
	arbusto.setAtributo(madeira);

	expect(arbusto.getAtributo().getValor()).toBeLessThan(totalMadeiraOriginal);
});
