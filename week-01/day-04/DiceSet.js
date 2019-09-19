'use strict';

class DiceSet {

  constructor() {
    this.numOfDices = 6;
  }

  roll() {
    this.dice = [];
    for (let i = 0; i < this.numOfDices; i++) {
      this.dice.push(Math.floor(Math.random() * 6 + 1));
    }
    return this.dice;
  }

  reroll(index) {
    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        this.dice[i] = Math.floor(Math.random() * 6 + 1);
      }
    } else {
      this.dice[index] = Math.floor(Math.random() * 6 + 1);
    }
  }

  getCurrent(index) {
    if (index === undefined) {
      for (let i = 0; i < this.numOfDices; i++) {
        return this.dice;
      }
    } else {
      return this.dice[index];
    }
  }
}

// You have a `DiceSet` class which has a list for 6 dice
// You can roll all of them with roll(), do this first to get your array of dices
// Check the current rolled numbers with getCurrent()
// You can reroll with reroll()
// Your task is to roll the dice until all of the dice are 6

const diceSet = new DiceSet();
console.log(diceSet.roll());
console.log(diceSet.getCurrent());

console.log('------------------');

let roll = true;
while (roll) {
  diceSet.reroll()
  let dices = diceSet.getCurrent();
  console.log(diceSet.getCurrent(),dices.filter(dice => dice === 6).length);
  dices.filter(dice => dice === 6).length === 6 ? roll = false : '';
}

// diceSet.reroll();
// console.log(diceSet.getCurrent());

// console.log('------------------');

// console.log(diceSet.getCurrent(5));
// diceSet.reroll();
// console.log(diceSet.getCurrent());

// console.log('------------------');

// diceSet.reroll(4);
// console.log(diceSet.getCurrent());