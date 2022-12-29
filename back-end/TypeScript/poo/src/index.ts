import Client from "./Client";
import Request from "./Request";
import Order from "./Order";
import Data from "./Data";

const client = new Client('Larissa');

const pizza = new Request('Pizza de Bacon', 40.00);
const refri = new Request('Coca-Cola', 10.00);


const order = new Order(client, [pizza, refri], 'dinheiro', 0.3);

// console.log(order.totalCost());
// console.log(order.costWithDiscount());

const testDate = new Data(29, 1, 1989);

// console.log(testDate.getMonthName());
console.log(testDate.format('e'));