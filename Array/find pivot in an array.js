function findPivot(arr){
    start = 0;
    end = arr.length - 1;
    mid = parseInt(start + (end - start) / 2);
    while(start < end){
        if(arr[mid] >= arr[0]){
            start = mid + 1;
        } else{
            end = mid;
        }
        mid = parseInt(start + (end - start) / 2);
    }
    return arr[start];
}

let array = [9,10,11,12,13,2,3,4,5,6,7,8]
console.log(findPivot(array));