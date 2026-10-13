function solve(arr){
    arr.sort((a,b) => a-b);
    
    let mid = Math.floor(arr.length / 2);
    let result = [];

    for(let i = mid; i < arr.length; i++){
        result.push(arr[i]);
    }

    return result;
}

console.log(solve([4, 7, 2, 5]));
console.log(solve([3, 19, 14, 7, 2, 19, 6]));