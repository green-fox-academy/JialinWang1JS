import { isObject } from "util"

function primitiveFields(object): void {
    let arr = []
    for (let o in object) {
        !isObject(object[o]) && arr.push(o)
    }
    console.log(arr)
}
primitiveFields({ x: 1, y: true, z: [] })