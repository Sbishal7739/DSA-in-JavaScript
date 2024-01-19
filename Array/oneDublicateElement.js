function findDublicate(arr){
    let ans = 0;
    for(let i = 0; i < arr.length; i++){
        ans = ans ^ arr[i];
    }
    for(let i = 1; i < arr.length; i++){
        ans = ans ^ i;
    }
    return ans;
}


let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7];
console.log(findDublicate(array));