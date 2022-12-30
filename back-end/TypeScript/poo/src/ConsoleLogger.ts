interface Logger {
  log(param: string): void;
}

export class ConsoleLogger implements Logger {
  log(param: string): void {
    console.log(1, param);
  }
}

export class ConsoleLogger2 implements Logger {
  log(param: string): void {
    console.log(2, param);
  }
}

interface Database {
  Logger: Logger;
  save(key: string, value: string): void;
}

export class ExampleDatabase implements Database {
  constructor(public logger: Logger = new ConsoleLogger2()) { }
  Logger!: Logger;

  save(key: string, value: string): void {
    this.logger.log(`${key}, ${value}`);
  }
}