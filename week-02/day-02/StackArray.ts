import { Stack } from './dataStructures'

export default class StackArray implements Stack {
    private stack:string[]
    constructor(){
        this.stack = []
    }
    empty(): boolean {
        return !this.stack.length
    }
    peek(): string {
        return this.stack[this.stack.length]
    }
    push(value: string): void {
        this.stack.push(value)
    }
    pop(): string {
        return this.stack.pop()
    }
}