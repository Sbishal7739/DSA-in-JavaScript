// Array Intersection brute force 
function intersection(arr1, arr2){
    let newArr = [];
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i] === arr2[j]){
                newArr.push(arr2[j]);
                arr2[j] = -1;
                break;
            }
        }
    }
    return newArr;
}

let array1 = [3,2,5,6];
let array2 = [3,6];
console.log(intersection(array1, array2));
