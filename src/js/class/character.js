export default class Character {
    constructor(name, type) {
        const paramsTyp = ['Bowerman', 'Swordsman', 'Magician', 'Undead', 'Daemon', 'Zombie'];

        if ((name.length < 2) || (name.length > 10)) {
            throw new Error('Имя должно содержать от 2х до 10 символов!');
        }

        if (typeof name !== 'string') {
            throw new Error('Имя должно быть строкой!');
        }

        if (!paramsTyp.includes(type)) {
            throw new Error('Класс введен некорректно!');
        }

        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;
        this.defence = undefined;
        this.attack = undefined;
    }


    levelUp() {
        if (this.health > 0) {
            this.level += 1;
            this.attack = Math.round(this.attack * 1.2);
            this.defence = Math.round(this.defence * 1.2);
            this.health = 100;
        } else {
            throw new Error('Нельзя повысить level умершего');
        }


    }

    damage(points) {
        if (Math.round(points * (1 - this.defence / 100)) < this.health) {
            this.health -= Math.round(points * (1 - this.defence / 100));
        } else {
            throw new Error('Health is zero');
        }
    }

}
