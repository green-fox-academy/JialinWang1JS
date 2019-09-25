let array: number[] = [1, 45, 6, 12, 13, 11, 25, 98, 778, 612450, 2674, 32165, 564, 65, 865]
// 1 6 45 12
function BubbleSort(array): number[] {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]) {
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp

            }
        }
    }
    return array
}

function BinarySearchRecursion(array: number[], value: number): number {
    let middleNum = Math.floor((array.length) / 2)
    console.log(array, middleNum)
    if (array[middleNum] === value) return array[middleNum]

    if (array[middleNum] > value) return BinarySearchRecursion(array.slice(0, middleNum - 1), value)

    if (array[middleNum] < value) return BinarySearchRecursion(array.slice(middleNum - 1, array.length), value)
}

console.log(BubbleSort(array))
console.log(BinarySearchRecursion(BubbleSort(array), 32165))

function BinarySearchIterate(array: number[], value: number): number {
    while (array.length) {
        let middleNum = Math.floor((array.length) / 2)
        console.log(array, middleNum)
        if (array[middleNum] === value) return array[middleNum]

        if (array[middleNum] > value) array = array.slice(0, middleNum - 1)
        else if (array[middleNum] < value) array = array.slice(middleNum + 1, array.length)
    }
    return -1
}

BubbleSort(array)
console.log(array)
console.log(BinarySearchIterate(BubbleSort(array), 321651))