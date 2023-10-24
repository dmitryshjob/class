import Undead from '../class/undead.js';
import {paramsTyp} from '../class/character.js';

test('Проверка наличия класса Undead', () => {
    const result = paramsTyp.undead;
    expect(result).not.toBe(undefined);
});

test('Проверка создания класса Undead', () => {
    const result = new Undead('Undead');
    expect(result.name).toBe('Undead'); 
    expect(result.type).toBe('undead'); 
    expect(result.health).toBe(100); 
    expect(result.level).toBe(1); 
    expect(result.attack).toBe(25); 
    expect(result.defence).toBe(25);
});