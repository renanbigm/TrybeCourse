import { myFunc } from "./Superclass";

interface MyInterface {
  myNumber: number;
  myFunc(myParam: number): string;
}

export default class MyClass implements MyInterface {
  constructor(public myNumber: number) { }

  myFunc(myParam: number): string {
    return (this.myNumber + myParam).toString();;
  }
}

