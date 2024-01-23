// Sort 0 1 optimize approach
function sort01(arr){
    let i = 0;
    let j = arr.length - 1;
    let temp = 0;
    while (i < j){
        if (arr[i] === 0){
            i++;
        }
        else if (arr[j] === 1){
            j--;
        }
        else{
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return arr;
}

let array = [1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1];
console.log(sort01(array));