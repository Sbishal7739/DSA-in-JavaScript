function reverseArray(arr){
    let i = 0
    let j = arr.length - 1;
    let temp = 0;
    while (i < j) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr
}

let array = [6,5,4,3,2,1];
console.log(reverseArray(array));
