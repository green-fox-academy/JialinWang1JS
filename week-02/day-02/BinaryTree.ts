import { Tree } from './dataStructures'

export class TreeNode {
    value: string
    leftNode: TreeNode
    rightNode: TreeNode
    parentNode: TreeNode

    constructor(value: string) {
        this.value = value
        this.leftNode = null
        this.rightNode = null
        this.parentNode = null
    }
}

export class BinaryTree implements Tree {
    private rootNode: TreeNode
    constructor() {
        this.rootNode = null
    }
    empty(): boolean {
        return this.rootNode === null
    }
    add(value: string): void {
        if (this.rootNode === null) this.rootNode = new TreeNode(value)
        else {
            let done = false
            while (!done) {
                let currentNode = this.rootNode
                if (currentNode.leftNode === null) {
                    currentNode.leftNode = new TreeNode(value)
                    currentNode.parentNode = currentNode
                    done = true
                }
                else if (currentNode.rightNode === null) {
                    currentNode.rightNode = new TreeNode(value)
                    currentNode.parentNode = currentNode.rightNode
                    done = true
                }
                currentNode = Math.round(Math.random()) ? currentNode.leftNode : currentNode.rightNode
            }
        }
    }
    remove(value: string): void {

    }
    search(value: string): boolean {
        let currentNode = this.rootNode
        return this.searchValue(currentNode, value)
    }

    searchValue(node: TreeNode, value: string): boolean {
        if (node === null) return false
        if (value === node.value) return true

        let result = this.searchValue(node.leftNode, value)
        if (!result) result = this.searchValue(node.rightNode, value)
        else return result
    }
}