/*Создать тамагочи, у которого должно быть минимум 6 методов, минимум 6 переменных, от которых зависит его жизнь. Например: создается инстанс тамагочи и дается имя питомцу, он может кушать, гулять, спать, пить, умереть или сбежать и т.д. За эти или иные действия отвечают переменные самого инстанса, например health, happiness и так далее...*/

class Tamagochi {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.happiness = 100;
        this.hungry = 30;
        this.play = 100;
        this.sleep = 30;
        this.energy = 100;
        this.drawLines();
    }

    drawLines() {
        document.getElementById('health-line').style.width = this.health + '%';
        document.getElementById('happiness-line').style.width = this.happiness + '%';
        document.getElementById('hungry-line').style.width = this.hungry + '%';
        document.getElementById('play-line').style.width = this.play + '%';
        document.getElementById('sleep-line').style.width = this.sleep + '%';
        document.getElementById('energy-line').style.width = this.energy + '%';
    }

    saySomething(text) {
        document.getElementById('text').style.display = 'block';
        document.getElementById('speak').innerText = text;
    }

    angryPikachu() {
        document.getElementById('pikachu').style.display = 'none';
        document.getElementById('pikachu-angry').style.display = 'block';
    }

    goodPikachu() {
        document.getElementById('pikachu-angry').style.display = 'none';
        document.getElementById('pikachu').style.display = 'block';
    }


    changeParameter(value, parameter) {
        let newValue = parameter + value;
        if (newValue < 0) {
            return 0;
        } else if (newValue > 100) {
            return 100;
        } else {
            return newValue;
        }
    }

    control(val) {
        if (val === 0 && this.health > 0) {
            this.health -= 1;
        }
        if (val === 100 && this.health > 0) {
            this.health -= 1;
        }
    }

    controlHealth() {
        if (this.health < 30) {
            this.angryPikachu();
            this.saySomething('I\'m feel bad, cure me')
        }
        if (this.health >= 40) {
            this.goodPikachu();
        }
    }

    life() {
        this.happiness = this.changeParameter(-1, this.happiness);
        if (this.happiness > 35 && this.happiness < 40) {
            this.saySomething('I\'m sad, funny with me!');
        }
        this.control(this.happiness);

        this.hungry = this.changeParameter(2, this.hungry);
        if (this.hungry > 65 && this.hungry < 75) {
            this.saySomething('I\'m starving, feed me!');
        }
        this.control(this.hungry);

        this.play = this.changeParameter(-1, this.play);
        if (this.play > 55 && this.play < 60) {
            this.saySomething('Play with me, I\'m bored!');
        }
        this.control(this.play);

        this.sleep = this.changeParameter(1, this.sleep);
        if (this.sleep > 75 && this.sleep < 85) {
            this.saySomething('I want to sleep!');
        }
        this.control(this.sleep);

        this.energy = this.changeParameter(-0.5, this.energy);
        if (this.energy > 30 && this.energy < 35) {
            this.saySomething('I\'m very tired!');
        }
        this.control(this.energy);

        this.drawLines();
        this.controlHealth();
    }

    sayName() {
        this.saySomething(`My name is ${this.name}`);
    }

    feedTamagochi() {
        this.hungry = this.changeParameter(-5, this.hungry);
        this.energy = this.changeParameter(2, this.energy);
        this.health = this.changeParameter(1, this.health);
        this.happiness = this.changeParameter(1, this.happiness);
        this.saySomething('Yummy!');
        this.drawLines();
    }

    playWithTamagochi() {
        this.play = this.changeParameter(3, this.play);
        this.health = this.changeParameter(1, this.health);
        this.happiness = this.changeParameter(2, this.happiness);
        this.hungry = this.changeParameter(2, this.hungry);
        this.sleep = this.changeParameter(1, this.sleep);
        this.energy = this.changeParameter(-2, this.energy);
        this.saySomething('I like to play!');
        this.drawLines();
    }

    treatTamagochi() {
        this.health = this.changeParameter(5, this.health);
        this.happiness = this.changeParameter(2, this.happiness);
        this.energy = this.changeParameter(2, this.energy);
        this.saySomething('I\'m almost healthy!');
        this.drawLines();
    }

    sleepTamagochi() {
        this.sleep = this.changeParameter(-20, this.sleep);
        this.health = this.changeParameter(2, this.health);
        this.hungry = this.changeParameter(3, this.hungry);
        this.energy = this.changeParameter(3, this.energy);
        this.saySomething('I slept well!');
        this.drawLines();
    }

    funnyTamagochi() {
        this.happiness = this.changeParameter(3, this.happiness);
        this.energy = this.changeParameter(1, this.energy);
        this.health = this.changeParameter(1, this.health);
        this.saySomething('I\'m funny!');
        this.drawLines();
    }
}

let pikachu = new Tamagochi('Pikachu');

let timerId = setInterval(function () {
    pikachu.life();
    if (pikachu.health === 0) {
        clearInterval(timerId);
        alert('Game over! Pikachu is dead!');
    }
}, 1000);