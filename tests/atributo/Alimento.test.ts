import Alimento from '../../src/atributo/Alimento';

test('deveria ter o mesmo nome da class', () => {
	const alimento = new Alimento(10);
	expect(alimento.getNome()).toBe(alimento.constructor.name);
});

test('O total de alimento deveria ser 10', () => {
	const alimento10 = 10;
	const alimento = new Alimento(alimento10);
	expect(alimento.getValor()).toEqual(alimento10);
});

test('O total do alimento foi alterado de 10 para 9 o resultado final deve ser 9', () => {
	const alimento10 = 10;
	const alimento9 = 9;
	const alimento = new Alimento(alimento10);
	expect(alimento.getValor()).toEqual(alimento10);
	alimento.setValor(alimento9);
	expect(alimento.getValor()).toEqual(alimento9);
});
