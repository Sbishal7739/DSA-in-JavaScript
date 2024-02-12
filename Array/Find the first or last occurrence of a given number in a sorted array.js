function firstOccurrence(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid = parseInt(start + (end - start) / 2);
    let ans;

    while (start <= end) {
        if (arr[mid] === target) {
            ans = mid;
            end = mid - 1;
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = parseInt(start + (end - start) / 2);
    }
    if(ans){
        return ans;
    } else {
        return "Element is not present"
    }
}

function lastOccurrence(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid = parseInt(start + (end - start) / 2);
    let ans;

    while (start <= end) {
        if (arr[mid] === target) {
            ans = mid;
            start = mid + 1;
        } else if (arr[mid] > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = parseInt(start + (end - start) / 2);
    }
    if(ans){
        return ans;
    } else {
        return "Element is not present"
    }
}

let array = [1, 2, 2, 3, 4, 4, 4, 5, 5, 5, 5];
let target = 10;
let firstIndex = firstOccurrence(array, target);
let lastIndex = lastOccurrence(array, target);
console.log(firstIndex, lastIndex);