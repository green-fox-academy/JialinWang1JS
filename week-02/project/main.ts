import { Minesweeper } from './Minesweeper'
const rl = require('readline-sync')



let size = 0, mines = 0

while (!size) {
    let input: number = rl.question('How big the gameplay should be (n >= 6 &&)? ')
    if (isNaN(input)) {
        console.log('Please input a number!')
    }
    else {
        input >= 6 ? size = input : console.log(`That's not a valid number for the dimension! (n >= 6)`)
    }
}

while (!mines) {
    let input = rl.question(`How many mines you'd like to find (k)?`)
    if (isNaN(input)) {
        console.log('Please input a number!')
    }
    else {
        input > 0 ? mines = input : console.log(`That's not a valid number for the mines!`)
    }
}

const minesweeper = new Minesweeper(size, mines)

minesweeper.generateBoard()
let end = 0
while (!end) {
    minesweeper.print()
    try {
        let input = rl.question('What field to reveal?')
        end = minesweeper.touchGird(input[0].toUpperCase().charCodeAt() - 65, +input.slice(1))
        minesweeper.print(true)


    } catch (e) {
        console.log('wrong input!')
        rl.flush()
    }
}
if(end === 1) console.log('you lose...')
else if(end === 2) console.log('you win!!!')