let array: number[] = [1, 45, 6, 12, 13, 11, 25, 98, 778, 612450, 2674, 32165, 564, 65, 865]
// 1 6 45 12
function BubbleSort(array): number[] {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] > array[j]){
                let temp = array[i]
                array[i] = array[j]
                array[j] = temp
                
            }
        }
    }
    return array
}

function BinarySearch(array: number[], value: number): number {
    let middleNum = Math.floor((array.length) / 2)
    console.log(array, middleNum)    
    if (array[middleNum] === value) return array[middleNum]

    if (array[middleNum] > value) return BinarySearch(array.slice(0, middleNum - 1), value)

    if (array[middleNum] < value) return BinarySearch(array.slice(middleNum - 1, array.length), value)
}

console.log(BubbleSort(array))
console.log(BinarySearch(BubbleSort(array), 32165))