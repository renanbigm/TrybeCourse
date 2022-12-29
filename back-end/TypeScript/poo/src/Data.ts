export default class Data {
  private _day: number;
  private _month: number;
  private _year: number;

  constructor(day: number, month: number, year: number) {
    const dateStr = `${year}-${month}-${day}`;

    // verifica se a data é válida
    if (new Date(dateStr).getDate() !== day) {
      this._day = 1;
      this._month = 1;
      this._year = 1900;
    } else {
      this._day = day;
      this._month = month;
      this._year = year;
    }
  }

  get day(): number {
    return this._day;
  }

  set day(value: number) {
    this._day = value;
  }

  get month(): number {
    return this._month;
  }

  set month(value: number) {
    this._month = value;
  }

  get year(): number {
    return this._year;
  }

  set year(value: number) {
    this._year = value;
  }

  getMonthName(): string {
    const months = [
      'janeiro',
      'fevereiro',
      'março',
      'abril',
      'maio',
      'junho',
      'julho',
      'agosto',
      'setembro',
      'outubro',
      'novembro',
      'dezembro',
    ];

    return months[this.month - 1];
  }

  isLeapYear(): boolean {
    return this._year % 4 === 0;
  }

  format(config: string) {
    const day = this.day < 10 ? '0' + this.day : this.day;
    const month = this.month < 10 ? '0' + this.month : this.month;

    if (config.includes('aaaa') && config.includes('/')) {
      return `${day}/${month}/${this.year}`;
    }

    if (config.includes('aaaa') && config.includes('-')) {
      return `${this.year}-${month}-${day}`;
    }

    if (config.includes(',')) {
      return `${day},${this.getMonthName()} de ${this.year}`;
    }

    return `${day} de ${this.getMonthName()} de ${this.year.toString().substring(2, 4)}`;

  }

}
