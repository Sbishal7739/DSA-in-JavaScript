function searchInsertPosition(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            start = mid + 1;
        } else {
            end = mid - 1; 
        }
    }
    return start;
}

let array = [1, 3, 5, 6];
let target = 7;

console.log(searchInsertPosition(array, target));
