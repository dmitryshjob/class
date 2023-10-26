import Swordsman from '../class/swordsman.js';

test('Проверка создания объекта Swordsman', () => {
    const swordsman = new Swordsman('Swordsman');
    const correctsSwordsman = {
        attack: 40, defence: 10, health: 100, level: 1, name: 'Swordsman', type: 'Swordsman'
    };
    expect(swordsman).toEqual(correctsSwordsman);
});