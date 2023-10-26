import Zombie from '../class/zombie.js';

test('Проверка создания объекта Bowerman', () => {
    const zombie = new Zombie('Zombie');
    const correctZombie = {
        attack: 40, defence: 10, health: 100, level: 1, name: 'Zombie', type: 'Zombie'
    };
    expect(zombie).toEqual(correctZombie);
});