// Array Intersection optimized
function intersection(arr1, arr2) {
    let i = 0;
    let j = 0;
    let newArray = [];

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] === arr2[j]) {
            newArray.push(arr1[i]);
            i++;
            j++;
        }

        else if (arr1[i] < arr2[j]) {
            i++;
        }
        else {
            j++;
        }
    }
    return newArray;
}


let array1 = [1, 2, 3, 4, 5];
let array2 = [3, 5];
console.log(intersection(array1, array2));