import Bowerman from '../class/bowerman.js';

test('Проверка создания объекта Bowerman', () => {
    const bowerman = new Bowerman('Bowerman');
    const correctBowerman = {
        attack: 25, defence: 25, health: 100, level: 1, name: 'Bowerman', type: 'Bowerman',
    };
    expect(bowerman).toEqual(correctBowerman);
});

