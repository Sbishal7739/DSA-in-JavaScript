// Find Unique Element
function uniqueElement(arr){
    let arr2 = []
    for(let i = 0; i < arr.length; i++){
        let count = 0
        for(let j = 0; j < arr.length; j++){
            if(arr[i] === arr[j]){
                count++;
            }
        }

        if(count === 1){
            arr2.push(arr[i]);
        }
    }
    return arr2;
}

let array = [6, 7, 1, 2, 1, 2, 3, 4, 3, 5, 7]

console.log(uniqueElement(array))