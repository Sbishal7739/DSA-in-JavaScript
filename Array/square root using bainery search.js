function squareRoot(num){
    let start = 0;
    let end = num;
    let mid = parseInt((start + end) / 2);
    let ans = 0;
    while(start <= end){
        let squre = mid * mid
        if(squre == num){
            return mid;
        } else if(squre > num){
            end = mid - 1;
        } else{
            ans = mid;
            start = mid + 1;
        }
        mid = parseInt((start + end) / 2);
    }
    return ans;
}

let number = 36;
console.log(squareRoot(number));