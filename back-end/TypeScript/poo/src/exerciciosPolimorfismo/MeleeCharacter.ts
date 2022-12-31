import Character from "./Character";

export default class MeleeCharacter extends Character {
  talk() { console.log('what u want')};

  specialMove(): void {
    console.log('hadukennnn')
  }
}
