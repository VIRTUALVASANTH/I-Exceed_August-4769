class Character {
    static characterCount = 0;
    #health;

    constructor(name, level = 1, health = 100) {
        this.name = name;
        this.level = level;
        this.#health = health;

        Object.defineProperty(this, 'characterID', {
            value: `char-${++Character.characterCount}`,
            writable: false,
            configurable: false,
            enumerable: true
        });
    }

    attack() {
        return `${this.name} performs a basic attack.`;
    }

    takeDamage(amount) {
        this.#health = Math.max(this.#health - amount, 0);
    }

    heal(amount) {
        this.#health += amount;
    }

    get health() {
        return this.#health;
    }

    set health(value) {
        if (value >= 0) {
            this.#health = value;
        }
    }

    getInfo() {
        return {
            id: this.characterID,
            name: this.name,
            level: this.level,
            health: this.#health
        };
    }

    static getTotalCharacters() {
        return Character.characterCount;
    }
}

class Warrior extends Character {
    constructor(name, weapon = "Sword") {
        super(name, 1, 150);
        this.weapon = weapon;
    }

    attack() {
        return `${this.name} swings their ${this.weapon} fiercely!`;
    }
}

class Mage extends Character {
    constructor(name, element = "Fire") {
        super(name, 1, 80);
        this.element = element;
    }

    attack() {
        return `${this.name} casts a ${this.element} spell!`;
    }
}

class Archer extends Character {
    constructor(name, arrows = 10) {
        super(name, 1, 100);
        this.arrows = arrows;
    }

    attack() {
        if (this.arrows > 0) {
            this.arrows--;
            return `${this.name} fires an arrow. (${this.arrows} left)`;
        } else {
            return `${this.name} is out of arrows!`;
        }
    }
}

// ---- Usage ----
const w = new Warrior("Thor", "Axe");
const m = new Mage("Merlin", "Ice");
const a = new Archer("Robin");

console.log(w.attack());
console.log(m.attack());
console.log(a.attack()); 

m.takeDamage(30);
console.log(`${m.name}'s health:`, m.health);

a.heal(20);
console.log(`${a.name}'s health:`, a.health);

m.takeDamage(70);
console.log(`${m.name}'s health:`, m.health);

console.log(w.getInfo());
console.log(m.getInfo());
console.log(`Total Characters Created: ${Character.getTotalCharacters()}`);