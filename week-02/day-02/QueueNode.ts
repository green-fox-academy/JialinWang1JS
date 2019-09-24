import { Node } from './LinkedList'
import { Queue } from './dataStructures'

export class QueueNode implements Queue {
    private head:Node
    private tail:Node
    constructor(){
        this.head = null
        this.tail = this.head
    }
    empty(): boolean {
        return this.head === null
    }
    peek(): string {
        return this.head.value
    }
    add(value: string): void {
        let newNode = new Node(value)
        this.tail.next = newNode
        this.tail = this.tail.next
    }
    remove(): string {
        let tempNode = this.head
        this.head = this.head.next
        return tempNode.value
    }

}