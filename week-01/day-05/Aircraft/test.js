const Aircraft = require('./Aircraft')
const Carrier = require('./Carrier')

let C1 = new Carrier(50, 5000)
let C2 = new Carrier(2340, 6000)

C1.add(new Aircraft('F35'))
C1.add(new Aircraft('F35'))
C1.add(new Aircraft('F35'))
C1.add(new Aircraft('F16'))
C1.add(new Aircraft('F16'))

C2.add(new Aircraft('F35'))
C2.add(new Aircraft('F35'))
C2.add(new Aircraft('F16'))
C2.add(new Aircraft('F16'))
C2.add(new Aircraft('F16'))

console.log(C1.getStatus())
console.log(C2.getStatus())
console.log('<-------Filled------->')
try {
    C1.fill()
}
catch(e){
    console.log(e)
}
console.log(C1.getStatus())
console.log('<-------Fight------->')
C1.fight(C1)
console.log(C1.getStatus())
console.log(C2.getStatus())


