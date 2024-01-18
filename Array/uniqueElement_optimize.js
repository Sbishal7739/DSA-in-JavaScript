function uniqueElement(arr) {
    let ans = 0;
    arr.forEach((element) => {
        ans = ans ^ element;
    })
    return ans ? true : false;
}

let array = [1, 5, 5, 2, 2, 1];
console.log(uniqueElement(array));
