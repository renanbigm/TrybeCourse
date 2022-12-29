export class Superclass {
  isSuper: boolean;
  
  constructor() {
    this.isSuper = true;
  }
  

  sayHello(): void {
    return console.log('Olá mundo!');
  }
}

export class Subclass extends Superclass {
  constructor() {
    super()
    this.isSuper = false;
  }
}

export const myFunc = (object: Superclass) => {
 
  return console.log(object.isSuper ? 'Super!' : 'Sub');
}

