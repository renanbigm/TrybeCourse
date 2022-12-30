import Client from "./Client";
import Request from "./Request";
import Order from "./Order";
import Data from "./Data";
import { myFunc, Subclass, Superclass } from "./Superclass";
import MyClass from "./MyClass";
import { ConsoleLogger, ConsoleLogger2, ExampleDatabase } from "./ConsoleLogger";
import Person from "./exercíciosFixação/Person";

const client = new Client('Larissa');

const pizza = new Request('Pizza de Bacon', 40.00);
const refri = new Request('Coca-Cola', 10.00);


const order = new Order(client, [pizza, refri], 'dinheiro', 0.3);

// console.log(order.totalCost());
// console.log(order.costWithDiscount());

// const testDate = new Data(29, 1, 1989);

// console.log(testDate.getMonthName());
// console.log(testDate.format('e'));
//----------------------------------------------------------------------
// const sup = new Superclass();
// const sub = new Subclass();

// console.log(myFunc(sup));
// console.log(myFunc(sub));
//-----------------------------------------------------------------------

// const objt = new MyClass(10);

// console.log(objt.myNumber);
// console.log(objt.myFunc(4));

//----------------------------------------------------------------------

// const log1 = new ConsoleLogger();
// const log2 = new ConsoleLogger2();

// const data1  = new ExampleDatabase(log1);
// const data2  = new ExampleDatabase(log2);
// const data3  = new ExampleDatabase();

// data1.save('aa', 'asda')
// data2.save('bb', 'basdasd')
// data3.save('cct', 'casdac')

//-----------------------------------------------------------------------

const person = new Person('renan', new Date('2019/07/01'));

console.log(person.validateName());
console.log(person.validateAge());
console.log(person.validateDate());