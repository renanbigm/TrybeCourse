const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 800,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const getDragonDmg = () => {
  const dmg = Math.floor(Math.random() * dragon.strength) + 1;
  if (dmg <= 15) return 15;
  return dmg;
} 

const getWarriorDmg = () => {
  const dmg = Math.floor(Math.random() * (warrior.strength * warrior.weaponDmg)) + 1;
  if (dmg <= warrior.strength) return warrior.strength;
  return dmg;
}

const getMageManaAndDmg = () => {
  const dmg = Math.floor(Math.random() * (mage.intelligence * 2)) + 1;
  let manaSpent = 15;
  if (mage.mana < 15) {
    manaSpent = 0;
    mage.intelligence = 'Não pode causar dano, mana insuficiente!';
    return {damage: mage.intelligence, manaSpent: manaSpent};
  }
  if (dmg <= mage.intelligence) {
    return {damage: mage.intelligence, manaSpent: manaSpent};
  }
  return {damage: dmg, manaSpent: manaSpent};
};


const gameActions = ({ 
  turns: (turnsCount) => `Round: ${turnsCount}!`,
  warrior: (getWarriorDmg) => `\n\nWarrior damage delt: ${warrior.damage = getWarriorDmg},\nDragon's health: ${dragon.healthPoints -= getWarriorDmg}/800.`,
  mage: (getMageManaAndDmg) =>(getMageManaAndDmg.manaSpent === 0) ? `\n\nMage damage delt: ${mage.intelligence}` : `\n\nMage damage delt: ${mage.damage = getMageManaAndDmg.damage}, Mana remaining: ${mage.mana -= getMageManaAndDmg.manaSpent}/125,\nDragon's health: ${dragon.healthPoints -= getMageManaAndDmg.damage}/800.`,
  dragon: (getDragonDmg) => {
    const randomTarget = Math.floor(Math.random() * 2) + 1;
    if (randomTarget === 1) {
      return `\n\nDragon damage to Warrior: ${dragon.damage = getDragonDmg},\nWarrior's health: ${warrior.healthPoints -= getDragonDmg}/200.
      \n---------------------------------------------------------------------`;
    }
    if (randomTarget === 2) {
      return `\n\nDragon damage to Mage: ${dragon.damage = getDragonDmg},\nMage's health: ${mage.healthPoints -= getDragonDmg}/130.
      \n---------------------------------------------------------------------`;
    }
  },
})

// const turnsCount = () => {
//   let rounds = 0;
//   for (let i = 0; mage.healthPoints > 0; i += 1) {
//     console.log(mage.healthPoints);
//     rounds = rounds + 1;
//   }
//   return rounds;
// }

do {
  let round = 1;
  round = round + 1;
  console.log(
    `Round: ${round}`,
    // gameActions.turns(turnsCount()),
    gameActions.warrior(getWarriorDmg()),
    gameActions.mage(getMageManaAndDmg()),
    gameActions.dragon(getDragonDmg()));
  if(dragon.healthPoints < 0) {
    console.log ('Dragão morreu, heróis venceram!!');
    break;
  }
  if(mage.healthPoints < 0) {
    console.log('O mago foi foi derrato, run to the rills!!')
    break;
  }
  if(warrior.healthPoints < 0) {
    console.log('O warrior foi foi derrato, run to the rills!!')
    break;
  }
} while (dragon.healthPoints > 0 || mage.healthPoints > 0);

// dragon: (getDragonDmg) => `\n\nDragon damage delt: ${dragon.damage = getDragonDmg},\nWarrior's health: ${warrior.healthPoints -= getDragonDmg},\nMage's health: ${mage.healthPoints -= getDragonDmg}.\n\n\n`,