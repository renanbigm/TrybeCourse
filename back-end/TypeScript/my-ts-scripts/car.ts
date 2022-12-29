class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk(): void { console.log("bibibi") };
  turnOn(): void { console.log("carro ligou") };
  turnOff(): void { console.log("carro desligou") };
  speedUp(): void { console.log("Acabou o freeeeeiii") };
  speedDown(): void { console.log("Carro reduziu a velocidade") };
  stop(): void { console.log("carro parou") };
  turn(direction: string): void {
    console.log(`carro virou na direção ${direction}`)
  };
}

const goingTo = new Car('volkswagen gol', 'prata', 4);

console.log(goingTo.turn('frente'));
console.log(goingTo.turn('esquerda'));
console.log(goingTo.turn('frente'));

export default Car;