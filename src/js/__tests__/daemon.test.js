import Daemon from '../class/daemon.js';
import {paramsTyp} from '../class/character.js';

test('Проверка наличия класса Daemon', () => {
    const result = paramsTyp.daemon;
    expect(result).not.toBe(undefined);
});

test('Проверка создания класса Daemon', () => {
    const result = new Daemon('Daemon');
    expect(result.name).toBe('Daemon'); 
    expect(result.type).toBe('daemon'); 
    expect(result.health).toBe(100); 
    expect(result.level).toBe(1); 
    expect(result.attack).toBe(10); 
    expect(result.defence).toBe(40); 
});