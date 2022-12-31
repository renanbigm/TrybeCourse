import Person from "./Person";

export default class Student extends Person {
  private _enrollment: string;
  private _examsGrades: number[] = [];
  private _assigmentsGrades: number[] = [];

  constructor(name: string, birthDate: Date) {
    super(name, birthDate);

    this._enrollment = `${String(Date.now() * (Math.random() + 1)).replace(/\W/g, '')}`
  }

  get examsGrades(): number[] {
    return this._examsGrades;
  }

  set examsGrades(value: number[]) {
    if (value.length > 4) throw new Error('Não pode ter mais do que 4 notas de provas.');
    this._examsGrades = value;
  }

  get assigmentsGrades(): number[] {
    return this._assigmentsGrades;
  }

  set assigmentsGrades(value: number[]) {
    if (value.length > 2) throw new Error('Não pode ter mais do que 2 notas de trabalho.');

    this._assigmentsGrades = value;
  }

  sumGrades() {
    const grades = [...this._examsGrades, ...this._assigmentsGrades];

    return grades.reduce((acc, curr) => acc + curr);
  }

  sumAverageGrade() {
    const divisor = [...this._examsGrades, ...this._assigmentsGrades].length;

    return Math.round(this.sumGrades() / divisor);
  }

  generateEnrollment() {
    return `Esse é seu número de matrícula ${this._enrollment}`
  }
} 