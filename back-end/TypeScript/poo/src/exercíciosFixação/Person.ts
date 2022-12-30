export default class Person {
  private _name: string;
  private _birthDate: Date;

  constructor(name: string, birthDate: Date) {
    this._name = name;
    this._birthDate = birthDate;
  }

  get name(): string { return this._name }

  set name(value: string) { this._name = value }

  get birthDate(): Date { return this._birthDate }

  set birthDate(value: Date) { this._birthDate = value }

  validateName() {
    if(this._name.length < 3) {
      throw new Error('Nome precisa ter no mínimo três caracteres.')
    }; 

    return 'Nome válido';
  }

  validateDate() {
    const today = new Date().getTime();

    if (this._birthDate.getTime() > today) throw new Error('Data não pode ser futura');

    return 'Tudo nos conformes';
  }

  validateAge() {
    const diff = Math.abs(new Date().getTime() - this._birthDate.getTime());
    const yearMs = 31_536_000_000; 

    const result = Math.floor(diff / yearMs);

    if (result > 120) throw new Error('Idade não pode ser superior à 120 anos');

    return 'Tudo certo';
  }
}