class Student {
  private _matricula: string;
  private _nome: string;
  private _notasDeProva: number[];
  private _notasDeTrabalho: number[];

  constructor(
    matricula: string,
    nome: string,
  ) {
    this._matricula = matricula;
    this._nome = nome;
    this._notasDeProva = [];
    this._notasDeTrabalho = [];
  }

  get matricula(): string {
    return this._matricula;
  }

  set matricula(value: string) {
    this._matricula = value;
  }

  get nome(): string {
    return this._nome;
  }

  set nome(value: string) {
    this._nome = value;
  }

  get notasDeProva(): number[] {
    return this._notasDeProva;
  }

  set notasDeProva(value: number[]) {
    if (value.length !== 4) {
      throw new Error('precisa ter 4 notas');
    }
    
    this._notasDeProva = value;
  }

  get notasDeTrabalho(): number[] {
    return this._notasDeTrabalho;
  }

  set notasDeTrabalho(value: number[]) {
    if (value.length !== 2) {
      throw new Error('precisa ter 2 notas');
    }
    
    this._notasDeTrabalho = value;
  }

  getTotalGrades(): number {
    
    const allGrades = [...this._notasDeProva, ...this._notasDeTrabalho];
    const totalSumGrades = allGrades.reduce((acc, curr) => acc + curr);

    return totalSumGrades;
  }

  gradesAverage(): number {
    const totalGrades = this.getTotalGrades();
    return Math.round(totalGrades / 6);
  }
}

const personOne = new Student('202001011', 'Maria da Silva');

personOne.notasDeProva = [25, 20, 23, 23];
personOne.notasDeTrabalho = [45, 45];

console.log(personOne);
console.log(personOne.getTotalGrades());
console.log(personOne.gradesAverage());