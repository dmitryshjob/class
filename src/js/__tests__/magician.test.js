import Magician from '../class/magician.js';

test('Проверка создания объекта Magician', () => {
    const magician = new Magician('Magician');
    const correctmagician = {
        attack: 10, defence: 40, health: 100, level: 1, name: 'Magician', type: 'Magician'
    };
    expect(magician).toEqual(correctmagician);
});