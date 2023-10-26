import Daemon from '../class/daemon.js';

test('Проверка создания объекта Daemon', () => {
    const daemon = new Daemon('Daemon');
    const correctDaemon = {
        attack: 10, defence: 40, health: 100, level: 1, name: 'Daemon', type: 'Daemon'
    };
    expect(daemon).toEqual(correctDaemon);
});