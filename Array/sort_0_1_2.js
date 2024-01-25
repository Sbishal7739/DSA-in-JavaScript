// Sort 0 1 2 optimize approach
function sort01(arr){
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
    let temp = 0;

    while(mid <= high){
        if(arr[mid] === 1){
            mid++;
        } else if(arr[mid] === 0){
            temp = arr[mid];
            arr[mid] = arr[low];
            arr[low] = temp;
            mid++;
            low++;
            
        } else{
            temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high--;
        }
    }
    return arr;
    
}

let array = [1,1,0,0,2,1,2,0,1,1];
console.log(sort01(array));