import Swordsman from '../class/swordsman.js';
import {paramsTyp} from '../class/character.js';

test('Проверка наличия класса Swordsman', () => {
    const result = paramsTyp.swordsman;
    expect(result).not.toBe(undefined);
});

test('Проверка создания класса Swordsman', () => {
    const result = new Swordsman('Swordsman');
    expect(result.name).toBe('Swordsman'); 
    expect(result.type).toBe('swordsman'); 
    expect(result.health).toBe(100); 
    expect(result.level).toBe(1); 
    expect(result.attack).toBe(40); 
    expect(result.defence).toBe(10); 
});