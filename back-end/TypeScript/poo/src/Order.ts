import Client from './Client';
import Request from './Request';

export default class Order {
  clientName: Client;
  clientItems: Request[];
  payment: string;
  discount: number;

  constructor(
    client: Client,
    items: Request[],
    payment: string,
    discount: number
  ) {
    this.clientName = client;
    this.clientItems = items;
    this.payment = payment;
    this.discount = discount;
  }

  totalCost() {
    const allPrices = this.clientItems.reduce((acc, curr) => acc + curr.price, 0);

    return `Oi ${this.clientName.name}, seu pedido ficou no total de ${allPrices}. Obrigado pela preferência e volte sempre.`;
  }

  // costWithDiscount() {
  //   if (!this.discount) {
  //     return 'Não tem disconto';
  //   }

  //   return this.totalCost() - (this.totalCost() * this.discount);
  // }
}