'use strict';

const Thing = require('./thing');
const Fleet = require('./fleet');

class FleetOfThings {


  main() {
    this.fleet = new Fleet();
    let thingsToPush = [
      new Thing('Get milk'),
      new Thing('Remove the obstacles'),
      new Thing('Stand up'),
      new Thing('Eat lunch'),      
    ]

    thingsToPush[2].complete()
    thingsToPush[3].complete()
    
    thingsToPush.forEach(thing => this.fleet.add(thing))
  }

  print(){
    let count = 1
    this.fleet.getThings().forEach(thing => {
      console.log(`${count++}. [${thing.getCompleted() ? 'X' : ' '}] ${thing.getName()}`);
    })
  }
}

let fot = new FleetOfThings()
fot.main()
fot.print()
// -  You have the `Thing` class
// -  You have the `Fleet` class
// -  Create the `FleetOfThings` class with a `main` method
// -  Download those, use those
// -  In the `main` method create a fleet
// -  Achieve this output:
//  Crete a fleet of things to have this output:

// 1. [ ] Get milk
// 2. [ ] Remove the obstacles
// 3. [x] Stand up
// 4. [x] Eat lunch

// Hint: You have to create a `print()` method as well