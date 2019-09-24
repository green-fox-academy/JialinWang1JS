import { TreeNode } from './BinaryTree'
import { Tree } from './dataStructures'

export class BinarySearchTree implements Tree {
    private rootNode: TreeNode
    constructor() {
        this.rootNode = null
    }
    empty(): boolean {
        return this.rootNode === null
    }
    add(value: string): void {
        let currentNode = this.rootNode
        this.addInTo(currentNode, value)
    }

    addInTo(node: TreeNode, value: string): void {
        if (value <= node.value) {
            if (!node.leftNode) {
                node.leftNode = new TreeNode(value)
                node.leftNode.parentNode = node
            }
            else {
                this.addInTo(node.leftNode, value)
            }
        }
        else {
            if (!node.rightNode) {
                node.rightNode = new TreeNode(value)
                node.leftNode.parentNode = node
            }
            else {
                this.addInTo(node.rightNode, value)
            }
        }
    }
    remove(value: string): void {
        let currentNode = this.rootNode
        this.removeNode(currentNode, value)
    }
    removeNode(node: TreeNode, value: string): void {
        if (!node) return
        if (node.value > value) {
            this.removeNode(node.leftNode, value)
            return
        }
        if (node.value < value) {
            this.removeNode(node.rightNode, value)
            return
        }

        if(!node.leftNode && !node.rightNode) {
            node === null
        }
        else if(!node.leftNode){
            node = node.rightNode
        }
        else if(!node.rightNode){
            node = node.leftNode
        }
        else{
            let max = this.findMaxNode(node.leftNode)
            node.value = max
            this.removeNode(node, value)
            return
        }
    }
    private findMaxNode(node:TreeNode): string{
        
        if(!node.rightNode)  return node.leftNode.value

        if(!node.rightNode && !node.leftNode) return node.value

        return this.findMaxNode(node.rightNode)
    }

    search(value: string): boolean {
        let currentNode = this.rootNode
        return this.searchNode(currentNode, value)
    }
    searchNode(node: TreeNode, value: string): boolean {
        if (node.value === value) return true

        if (node.value < value) {
            if (!node.leftNode) return false
            else {
                return this.searchNode(node.leftNode, value)
            }
        }
        else {
            if (!node.rightNode) return false
            else {
                return this.searchNode(node.rightNode, value)
            }
        }
    }
}