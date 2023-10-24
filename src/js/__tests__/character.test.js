import Character from '../class/character.js';

test('Проверка функции повышения уровня', () => {
    const result = new Character('Ivan', 'zombie');
    expect(result.level).toBe(1);
    expect(result.attack).toBe(40); 
    expect(result.defence).toBe(10);
    expect(result.health).toBe(100);

  
    result.levelUp();
    expect(result.level).toBe(2);
    expect(result.attack).toBe(48); // На 20% повышает показатели attack
    expect(result.defence).toBe(12);// На 20% повышает показатели defence
    expect(result.health).toBe(100);
});

test('Проверка функции полученного урона', () => {
    const result = new Character('name', 'zombie');
    expect(result.health).toBe(100);
    result.damage(10);
    expect(result.health).toBe(91);
    result.damage(101);
    expect(result.health).toBe(0);
});


