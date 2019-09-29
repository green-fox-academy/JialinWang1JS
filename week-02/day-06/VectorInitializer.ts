const vectors = [
    [1,2,3],
    [],
    [2,3],
    [-1],
    [6,7,8,9]
]
let array3 = []

function matrix(x = 0, y = 0, z = 0){
    array3.push([x, y, z])
}

for(let v of vectors){
    matrix(...v)
}

console.log(array3)
