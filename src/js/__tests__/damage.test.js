import Character from '../class/zombie.js';

test('Проверка функции полученного урона', () => {
    const result = new Character('Ivan', 'Zombie');
    expect(result.health).toBe(100);
    result.damage(10);
    expect(result.health).toBe(91);
    result.damage(100);
    expect(result.health).toBe(1);
});