// function solve(strlength, k) {
//     let result = [1];

//     while (result.length < strlength) {
//         let sum = 0;

//         if (result.length === 1) {
//             sum = result[0];
//         } else if (result.length === 2) {
//             sum = result[0] + result[1];
//         } else {
//             for (let i = result.length-1; i >= result.length - k; i--) {
//                 sum += result[i];
//             }
//         }
//         result.push(sum);
//     }
//     console.log(result);
    
// } 

function solve(strlength, k) {
    let result = [1];

    while (result.length < strlength) {
        let sum = 0;

        for (let i = Math.max(0, result.length - k); i < result.length; i++) {
            sum += result[i];
        }

        result.push(sum);
    }

    return result;
}

console.log(solve(6, 3));
console.log(solve(8, 2));
