function numInt(arr) {
    let newArr = []
    for (i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }

    newArr.sort((a,b) => a - b)

    return newArr.filter((item, pos) => (newArr.indexOf(item) == pos))
}

console.log(numInt([2,1,5,8,5,7,7,2,9]))