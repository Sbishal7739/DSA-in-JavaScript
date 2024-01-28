function firstPosition(arr, target){
    let start = 0;
    let end = arr.length - 1;
    let mid = parseInt(start + (end - start ) / 2);
    let ans = 0;

    while (start <= end){
        if (arr[mid] === target){
            ans = mid;
            end = mid - 1;
        } else if(arr[mid] < target){
            start = mid + 1;
        } else{
            end = mid - 1;
        }
        mid = parseInt(start + (end - start ) / 2);
    }
    return ans;
}

function lastPosition(arr, target){
    let start = 0;
    let end = arr.length - 1;
    let mid = start + (end - start ) / 2;
    let ans = 0;

    while (start <= end){
        if (arr[mid] === target){
            ans = mid;
            start = mid + 1;
        } else if(arr[mid] < target){
            start = mid + 1;
        } else{
            end = mid - 1;
        }
        mid = parseInt(start + (end - start ) / 2);
    }
    return ans;
}


let array = [2,5,6,8,8,8,8,8,9];
let target = 8;

let firstNumberOccurrence = firstPosition(array, target);
let lastNumberOccurrence = lastPosition(array, target);

console.log(firstNumberOccurrence, lastNumberOccurrence);

let totalNumberOccurrences = (lastNumberOccurrence - firstNumberOccurrence) + 1;
console.log(totalNumberOccurrences);