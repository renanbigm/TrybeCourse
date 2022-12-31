export default interface IModel {
  create(): void;
  read(): void;
  update(): void;
  delete(): void;
}