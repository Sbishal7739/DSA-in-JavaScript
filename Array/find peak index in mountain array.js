function findPeakIndex(arr){
    start = 0;
    end = arr.length - 1;
    mid = parseInt(start + (end - start) / 2);
    while(start < end){
        if(arr[mid] < arr[mid + 1]){
            start = mid + 1;
        } else{
            end = mid;
        }
        mid = parseInt(start + (end - start) / 2);
    }
    return mid;
}

let array = [3,5,6,7,2,1];
console.log(findPeakIndex(array));