
class Pirate {

  constructor() {
    this.consumedRum = 1000;
    this.drinkTimes = 0;
    this.state = 'fine';
  }
  drinkSomeRum() {
    this.state === 'died' ? console.log(`he's dead`) :
      () => {
        this.drinkTimes++;
        this.consumedRum -= 100;
      }

  }
  howsItGoingMate() {
    this.drinkTimes <= 4 ? console.log('Pour me anudder!') :
      () => {
        console.log(`"Arghh, I'ma Pirate. How d'ya d'ink its goin?", the pirate passes out and sleeps it off.`);
        this.state = 'passed out';
      }
  }
  die() {
    this.state = 'died';
  }

  brawl(x) {
    if (x.die)
      return;

    let result = Math.floor(Math.random() * 3 + 1)
    if (result === 0) this.die();
    else if (result === 1) x.die();
    else {
      this.die();
      x.die();
    }
  }
}
module.exports = Pirate;