import Undead from '../class/undead.js';

test('Проверка создания объекта Undead', () => {
    const undead = new Undead('Undead');
    const correctUndead = {
        attack: 25, defence: 25, health: 100, level: 1, name: 'Undead', type: 'Undead'
    };
    expect(undead).toEqual(correctUndead);
});