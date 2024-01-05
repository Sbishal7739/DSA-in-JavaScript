function presentNumber(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return true
        }
    } return false
}

let array = [5, 8, 6, 7, 3, 4, 2];
let target = 4;
let number = presentNumber(array, target)
if (number) {
    console.log("Number present");
} else {
    console.log("Number not present");
}