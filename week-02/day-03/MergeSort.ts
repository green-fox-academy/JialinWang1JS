let arrayM: number[] = [1, 45, 6, 12, 13, 11, 25, 98, 778, 612450, 2674, 32165, 564, 65, 865]
let arrayTemp: number[] = []

function MergeSort(array: number[], leftStart: number, rightEnd: number) {
    let leftEnd = Math.floor((leftStart + rightEnd) / 2)

    if (leftStart >= rightEnd) return

    MergeSort(array, leftStart, leftEnd)
    MergeSort(array, leftEnd + 1, rightEnd)
    Merge(array, leftStart, rightEnd)
}

function Merge(array: number[], leftStart: number, rightEnd: number) {
    let leftEnd = Math.floor((leftStart + rightEnd) / 2)

    //pointers
    let left = leftStart
    let right = leftEnd + 1
    let index = leftStart

    while (left <= leftEnd && right <= rightEnd) {
        if (array[left] <= array[right]) {
            arrayTemp[index] = array[left++]
        }
        else {
            arrayTemp[index] = array[right++]
        }
        index++
    }

    while (left <= leftEnd) arrayTemp[index++] = array[left++]

    while (right <= rightEnd) arrayTemp[index++] = array[right++]

    index = leftStart
    
    while (leftStart <= rightEnd) array[leftStart++] = arrayTemp[index++]
}

console.log(arrayTemp)
console.log(arrayM)
MergeSort(arrayM, 0, arrayM.length - 1)
console.log(arrayM)


