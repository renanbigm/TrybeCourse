export default class Subject {
  private _name: string;

  constructor(name: string) {
    this._name = name;
  }

  get name() { return this._name; }

  set name(value: string) { 
    this._name = value; 
    
    if (this._name.length < 3) throw new Error('Nome da matéria precisa ter pelo menos 3 letras.');
  }
}