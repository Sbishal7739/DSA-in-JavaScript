function findPivot(arr, size){
    let start = 0;
    let end = size;
    let mid = parseInt(start + (end - start) / 2);

    while(start < end){
        if(arr[mid] >= arr[0]){
            start = mid + 1;
        } else{
            end = mid;
        }
        mid = parseInt(start + (end - start) / 2);
    }
    return start;
}

function bainarySearch(arr, s, e, target){
    let start = s;
    let end = e;
    let mid = parseInt(start + (end - start) / 2);

    while(start <= end){
        if(arr[mid] === target){
            return arr[mid];
        } else if(arr[mid] < target){
            start = mid + 1;
        } else{
            end = mid - 1;
        }
        mid = parseInt(start + (end - start) / 2);
    }
    return -1;
}

function findValue(arr, size, target){
    let pivot = findPivot(arr, size);
    if(arr[pivot] <= target && target <= size){
        return bainarySearch(arr, pivot, size, target);
    } else{
        return bainarySearch(arr, 0, pivot, target);
    }
}

let array = [7,8,9,10,11,12,13,1,2,3];
let size = array.length - 1;
target = 1;
console.log(findValue(array, size, target));