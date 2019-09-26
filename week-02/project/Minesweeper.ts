import { Grid } from './boardGrid'
import { toUnicode } from 'punycode'

export class Minesweeper {
    private size: number
    private mines: number
    private board: Array<Grid[]>

    constructor(size: number, mines: number) {
        this.size = size
        this.mines = mines
        this.board = []
    }

    generateBoard() {
        //initial board
        for (let i = 0; i < this.size; i++) {
            let boardLine: Grid[] = []
            for (let j = 0; j < this.size; j++) {
                boardLine.push(new Grid(i, j))
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
        let x: string = '  '

        //space between lines    
        let gap: string = ' '

        if (this.size >= 10) gap += ' '

        for (let i = 0; i < this.size; i++) {
            x += i + (i < 10 ? '  ' : ' ')
        }

        console.log(x)
        for (let i = 0; i < this.size; i++) {
            let y: string = String.fromCharCode(65 + i) + ' ';
            for (let j = 0; j < this.size; j++) {
                y += (this.board[i][j].touched ? (this.board[i][j].hasMine ? 'X' : this.board[i][j].count) : '#') + gap
            }
            console.log(y)
        }
    }
    checkMinesAround(posX: number, posY: number) {
        let girdAround: Grid[] = []
        let currentGird: Grid = this.board[posX][posY]
        if (currentGird.touched) return
        currentGird.touched = true
        let xStart = posX ? posX - 1 : 0
        let yStart = posY ? posY - 1 : 0
        let xEnd = (posX === this.size - 1) ? this.size - 1 : posX + 1
        let yEnd = (posY === this.size - 1) ? this.size - 1 : posY + 1

        // console.log(posX, posY, xStart, yStart, xEnd, yEnd)        
        for (let i = xStart; i <= xEnd; i++) {
            for (let j = yStart; j <= yEnd; j++) {
                (i !== posX || j !== posY) && (this.board[i][j].hasMine && currentGird.count++)
                girdAround.push(this.board[i][j])
            }
        }
        if (currentGird.count > 0) return
        else {
            girdAround.forEach(gird => this.checkMinesAround(gird.posX, gird.poxY))
        }
    }
    getGird(posX: number, posY: number): Grid {
        return this.board[posX][posY]
    }

    touchGird(posX: number, posY: number): boolean {
        let gird = this.board[posX][posY]
        if (gird.hasMine) {
            gird.touched = true
            return true
        }
        this.checkMinesAround(posX, posY)
        return false
    }
}