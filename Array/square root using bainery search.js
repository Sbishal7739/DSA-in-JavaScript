function squareRootInt(num){
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

function morePrecision(num, precision, squareRootInt){
    let factor = 1;
    let ans = squareRootInt;

    for(let i=0; i<precision; i++){
        factor = factor / 10;
        for(let j = ans; j*j < num; j = j+factor){
            ans = j;
        }
    }
    return ans.toFixed(precision);
}

let number = 5001;
let squareRoot = squareRootInt(number);
console.log(morePrecision(number, 3, squareRoot));