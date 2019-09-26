import { Minesweeper } from './Minesweeper'
const rl = require('readline-sync')



let size = 0, mines = 0

while (!size) {
    let input = rl.question('How big the gameplay should be (n >= 6 &&)? ')
    input >= 6 ? size = input : console.log(`That's not a valid number for the dimension! (n >= 6)`)
}

while (!mines) {
    let input = rl.question(`How many mines you'd like to find (k)?`)
    input > 0 ? mines = input : console.log(`That's not a valid number for the mines!`)
}

console.log(size, mines)

const minesweeper = new Minesweeper(size, mines)

minesweeper.generateBoard()
let gaming = true
while (gaming) {
    minesweeper.print()
    let input = rl.question('What field to reveal?')
    console.log(minesweeper.getGird(input[0].charCodeAt() - 65, input[1]))
}
