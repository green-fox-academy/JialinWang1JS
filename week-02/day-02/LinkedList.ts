import { LinkedList } from './dataStructures'

export class Node {
    next: Node
    value: string

    constructor(value?: string) {
        this.value = value
        this.next = null
    }
}

class LinkList implements LinkedList {
    private head: Node

    constructor() {
        this.head = new Node()
    }
    add(value: string, index?: number): void {
        let currentNode = this.head
        if (index === undefined) {

            while (currentNode.next !== null) currentNode = currentNode.next
            currentNode.next = new Node(value)
        }
        else {
            for (let i = -1; i < index - 1; i++) {
                if (currentNode.next) currentNode = currentNode.next
                else throw new Error('index over boundly')
            }
            if (currentNode.next === null) currentNode.next = new Node(value)
            else {
                let newNode = new Node(value)
                newNode.next = currentNode.next
                currentNode.next = newNode
            }
        }
    }
    get(index: number): string {
        let currentNode = this.head
        for (let i = -1; i < index; i++) {
            if (currentNode.next) currentNode = currentNode.next
            else throw new Error('index over boundly')
        }
        return currentNode.value
    }
    removeItem(value: string): void {
        let currentNode = this.head
        while (currentNode.next) {
            if (currentNode.next.value === value) {
                currentNode.next = currentNode.next.next
                return
            }
                currentNode = currentNode.next
        }
    }
    remove(index: number): string {
        let currentNode = this.head
        for (let i = -1; i < index - 1; i++) {
            if (currentNode.next) currentNode = currentNode.next
            else throw new Error('index over boundly')
        }
        let tempNode = currentNode.next
        currentNode.next = currentNode.next.next
        return tempNode.value 
    }
    size(): number {
        let i = 0;
        let currentNode = this.head.next
        while (currentNode) {
            i++
            currentNode = currentNode.next
        }
        return i
    }

    toString(): string {
        let str = ''
        let currentNode = this.head
        while(currentNode){
            str += currentNode.value + '->'
            currentNode = currentNode.next
        }

        return str + 'null'
    }
}

const linkList = new LinkList()
console.log(linkList.toString())

linkList.add('1')
linkList.add('2')
linkList.add('3')
linkList.add('4')
linkList.add('5')
linkList.add('6')
linkList.add('7', 0)

console.log(linkList.toString())

linkList.removeItem('null')
linkList.remove(0)
console.log(linkList.toString())

console.log(linkList.get(2), linkList.size())


