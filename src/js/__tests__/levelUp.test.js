import Character from '../class/zombie.js';


test('Проверка функции повышения уровня', () => {
    const result = new Character('Ivan', 'Zombie');
    expect(result.level).toBe(1);
    expect(result.attack).toBe(40); 
    expect(result.defence).toBe(10);
    expect(result.health).toBe(100);
    // expect(result.health=0).toBe(0);



    result.levelUp();
    expect(result.level).toBe(2); // +1 level
    expect(result.attack).toBe(48); // На 20% повышает показатели attack
    expect(result.defence).toBe(12);// На 20% повышает показатели defence
    expect(result.health).toBe(100);    
    }

);
