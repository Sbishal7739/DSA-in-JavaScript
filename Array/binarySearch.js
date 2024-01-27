function bainarySearch(arr, target) {
    let start = 0;
    let end = arr.length - 1;
    let mid = parseInt(start + (end - start) / 2);
    while (start <= end) {
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
        mid = parseInt(start + (end - start) / 2);
    }
    return -1;
}

let array = [2, 3, 5, 8, 13, 17, 20, 25];
