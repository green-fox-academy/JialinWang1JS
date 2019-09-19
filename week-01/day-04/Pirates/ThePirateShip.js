let Pirate = require('./Pirates')
class Ship {
  constructor() {
    this.Pirates = []
    this.Captain = null
  }

  fillShip() {
    this.Captain = new Pirate()
    let pirateNum = Math.floor(Math.random() * 100 + 1)
    for (let i = 0; i < pirateNum; i++) {
      this.Pirates.push(new Pirate())
    }
  }

  toString() {
    console.log(`The ship\`s captain is ${this.Captain.status}, he has ${this.Captain.consumedRum} rum resumed and the ship has 
    ${this.Pirates.filter(pirate => pirate.status !== 'died').length}
     pirates alive`);

  }
}