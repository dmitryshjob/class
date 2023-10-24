import Bowerman from '../class/bowerman.js';
import {paramsTyp} from '../class/character.js';

test('Проверка наличия класса Bowerman', () => {
    const result = paramsTyp.bowerman;
    expect(result).not.toBe(undefined);
});

test('Проверка создания класса Bowerman', () => {
    const result = new Bowerman('Bowerman');
    expect(result.name).toBe('Bowerman'); 
    expect(result.type).toBe('bowerman'); 
    expect(result.health).toBe(100); 
    expect(result.level).toBe(1); 
    expect(result.attack).toBe(25); 
    expect(result.defence).toBe(25); 
});