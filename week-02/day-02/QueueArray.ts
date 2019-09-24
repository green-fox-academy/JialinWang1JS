import { Queue } from './dataStructures'

export default class QueueArray implements Queue {
    private queue:string[]
    constructor(){
        this.queue = []
    }
    empty(): boolean {
        return !this.queue.length
    }
    peek(): string {
        return this.queue[0]
    }
    add(value: string): void {
        this.queue.push(value)
    }
    remove(): string {
        return this.queue.pop()
    }


}