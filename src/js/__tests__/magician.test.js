import Magician from '../class/magician.js';
import {paramsTyp} from '../class/character.js';

test('Проверка наличия класса Magician', () => {
    const result = paramsTyp.magician;
    expect(result).not.toBe(undefined);
});

test('Проверка создания класса Magician', () => {
    const result = new Magician('Magician');
    expect(result.name).toBe('Magician');
    expect(result.type).toBe('magician');
    expect(result.health).toBe(100); 
    expect(result.level).toBe(1);
    expect(result.attack).toBe(10); 
    expect(result.defence).toBe(40); 
});