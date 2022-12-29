"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Car {
    constructor(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    honk() { console.log("bibibi"); }
    ;
    turnOn() { console.log("carro ligou"); }
    ;
    turnOff() { console.log("carro desligou"); }
    ;
    speedUp() { console.log("Acabou o freeeeeiii"); }
    ;
    speedDown() { console.log("Carro reduziu a velocidade"); }
    ;
    stop() { console.log("carro parou"); }
    ;
    turn(direction) {
        console.log(`carro virou na direção ${direction}`);
    }
    ;
}
const goingTo = new Car('volkswagen gol', 'prata', 4);
console.log(goingTo.turn('frente'));
console.log(goingTo.turn('esquerda'));
console.log(goingTo.turn('frente'));
exports.default = Car;
