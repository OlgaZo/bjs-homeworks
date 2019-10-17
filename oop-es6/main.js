//ЗАДАНИЕ 1
class Weapon {
    constructor(name, attack, durability, range) {
        this.name = name;
        this.attack = attack;
        this.durability = durability;
        this.range = range;
        this.durabilityStart = this.durability;
    }

    takeDamage(damage) {
        return this.durability = (this.durability - damage < 0) ? 0 : this.durability - damage ;
    }

    
    getDamage() {
        if (this.durability === 0) {
            return 0;
        }
        if (this.durability >= 0.3 * this.durabilityStart) {
            return this.attack;
        } else {
            return 2;
        }     
    }
    
    isBroken() {
        return (this.durability > 0) ? false : true;
    }  
}

const hand = new Weapon('Рука', 1, Infinity, 1);
const bow  = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const stick = new Weapon('Посох', 8, 300, 2);

console.log('Задание 1');
console.log(hand);
console.log(bow);
console.log(sword);

console.log('Проверка прочности')
hand.takeDamage(1);
console.log(hand.durability);

bow.takeDamage(150);
console.log(bow.durability);

sword.takeDamage(600);
console.log(sword.durability);

console.log('Проверка аттаки');
console.log(hand.getDamage());
console.log(bow.getDamage());
console.log(sword.getDamage());

console.log('Проверка isBroken');
console.log(hand.isBroken());
console.log(bow.isBroken());
console.log(sword.isBroken());

console.log('Улучшеное оружие')
const upgradeBow = new Weapon('Длинный лук', 15, 200, 4);
console.log(upgradeBow);

const upgradeSword = new Weapon('Секира', 27, 800, 1);
console.log(upgradeSword);

const upgradeStick = new Weapon('Посох Бури', 10, 300, 3);
console.log(upgradeStick);

//ЗАДАНИЕ 2
console.log('Задание 2');

class Hand {
    constructor() {
        this.name = 'Рука';
        this.attack = 1;
        this.durability = Infinity;
        this.range = 1;
    }
}

class Bow {
    constructor() {
        this.name = 'Лук';
        this.attack = 10;
        this.durability = 200;
        this.range = 3;
    }
}

class Sword {
    constructor() {
        this.name = 'Меч';
        this.attack = 25;
        this.durability = 500;
        this.range = 1;
    }
}

class Knife {
    constructor() {
        this.name = 'Нож';
        this.attack = 5;
        this.durability = 300;
        this.range = 1;
    }
}

class Stick {
    constructor() {
        this.name = 'Посох';
        this.attack = 8;
        this.durability = 300;
        this.range = 2;
    }
}

class BowUpgrade extends Bow {
    constructor() {
        super();
        this.name = 'Длинный лук';
        this.attack = 15;
        this.range = 4;
    }
}

class StickUpgrade extends Stick {
    constructor() {
        super();
        this.name = 'Посох Бури';
        this.attack = 10;
        this.range = 3;
    }
}

class SwordUpgrade extends Sword {
    constructor() {
        super();
        this.name = 'Секира';
        this.attack = 27;
        this.durability = 800;
    }
}

const Hand1 = new Hand();
console.log(Hand1);

const Bow1 = new Bow();
console.log(Bow1);

const BowUpgrade1 = new BowUpgrade();
console.log(BowUpgrade1);

const StickUpgrade1 = new StickUpgrade();
console.log(StickUpgrade1);

const SwordUpgrade1 = new SwordUpgrade();
console.log(SwordUpgrade1);



