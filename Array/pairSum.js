// Pair sum bruteforce approach
function pairSum(arr, s){
    let ans = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] + arr[j] === s){
                let temp = [];
                temp.push(Math.min(arr[i], arr[j]));
                temp.push(Math.max(arr[i], arr[j]));
                ans.push(temp);
            }
        }
    }
    return ans;
}

let array = [1, 2, 3, 4, 5];
let s = 6;
console.log(pairSum(array, s));
