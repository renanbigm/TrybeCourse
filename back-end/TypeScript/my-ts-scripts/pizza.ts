type Slices  = 4 | 6 | 8;

interface Pizza {
  _flavor: string;
  _slices: Slices;
  
}

// class Pizza {
//   constructor(flavor: string, slice: Slices) {
//     this._flavor = flavor;
//     this._slice = slice;
//   }

//   createPizza(sabor: string, slices: number) {
//     return `Saindo uma pizza de ${sabor} com ${slices} fatias.`
//   }
// }

// const pitzaria = new Pizza('Calabresa', 8);
// const pitzaria2 = new Pizza('Marguerita', 6);
// const pitzaria3 = new Pizza('Nutella', 4);

const calabresa: Pizza = {
  _flavor: "Calabresa",
  _slices: 8,
}

const marguerita: Pizza = {
  _flavor: "Marguerita",
  _slices: 6
}

const nutela: Pizza = {
  _flavor: "Nutela",
  _slices: 4
}

console.log(calabresa);
console.log(marguerita);
console.log(nutela);

export default Pizza;
