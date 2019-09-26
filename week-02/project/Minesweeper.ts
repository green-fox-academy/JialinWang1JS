import { Grid } from './boardGrid'

export class Minesweeper {
    private size: number
    private mines: number
    private board: Array<Grid[]>

    constructor(size, mines) {
        this.size = size
        this.mines = mines
        this.board = []
    }

    generateBoard() {
        //initial board
        for (let i = 0; i < this.size; i++) {
            let boardLine:Grid[] = []
            for (let j = 0; j < this.size; j++) {
                boardLine.push(new Grid())
            }
            this.board.push(boardLine)
        }
        //filling with mines
        for (let i = 0; i < this.mines;) {

            let x = Math.floor(Math.random() * this.size)
            let y = Math.floor(Math.random() * this.size)

            if (!this.board[x][y].hasMine) {
                this.board[x][y].hasMine = true
                i++
            }
        }
    }

    print(): void {
        if (!this.board.length || !this.size || !this.mines) return

        //initial space
        let x:string = '  '
        
        //space between lines    
        let gap:string = ' '

        if(this.size >= 10) gap += ' '

        for(let i = 0; i < this.size; i++){
            x += i + (i < 10 ? '  ' : ' ')
        }

        console.log(x)
        for (let i = 0; i < this.size; i++) {
            let y:string = String.fromCharCode(65 + i) + ' ';
            for (let j = 0; j < this.size; j++) {
                 y += '#' + gap
            }
            console.log(y)
        }
    }

    getGird(posX, posY):Grid{
        return this.board[posX][posY]
    }

}