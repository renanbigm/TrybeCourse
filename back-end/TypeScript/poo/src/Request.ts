export default class Request {
  items: string;
  price: number;

  constructor(items: string, price: number) {
    this.items = items;
    this.price = price;
  }
}