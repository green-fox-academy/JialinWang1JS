import { Node } from './LinkedList'
import { Stack } from './dataStructures'

export class StackArray implements Stack {
    private top: Node
    
    constructor(){
        this.top = null
    }
    empty(): boolean {
        return this.top === null
    }
    peek(): string {
        return this.top.value
    }
    push(value: string): void {
        let newNode = new Node(value)
        newNode.next = this.top
        this.top = newNode
    }
    pop(): string {
        let tempNode = this.top
        this.top = this.top.next
        return tempNode.value
    }
}