import Zombie from '../class/zombie.js';
import {paramsTyp} from '../class/character.js';

test('Проверка наличия класса Zombie', () => {
    const result = paramsTyp.zombie;
    expect(result).not.toBe(undefined);
});

test('Проверка создания класса Zombie', () => {
    const result = new Zombie('Zombie');
    expect(result.name).toBe('Zombie'); 
    expect(result.type).toBe('zombie'); 
    expect(result.health).toBe(100); 
    expect(result.level).toBe(1); 
    expect(result.attack).toBe(40); 
    expect(result.defence).toBe(10); 
});