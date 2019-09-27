export class Grid {
    hasMine: boolean
    count: number
    touched: boolean
    posX: number
    poxY: number
    constructor(posX: number, poxY: number) {
        this.touched = false
        this.hasMine = false
        this.count = 0
        this.posX = posX
        this.poxY = poxY
    }
}