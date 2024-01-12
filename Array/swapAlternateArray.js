function swapAlternate(arr) {
    let temp = 0
    for (i = 0; i < arr.length - 1; i += 2) {
        if (i + 1 < arr.length) {
            temp = arr[i]
            arr[i] = arr[i + 1]
            arr[i + 1] = temp
            console.log("hey");
        }
    }
    return arr
}

let array = [1, 2, 3, 4, 5, 6]
console.log(swapAlternate(array));