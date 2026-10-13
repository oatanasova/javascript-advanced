function solve(arr) {

    let sorted = arr.sort((a, b) => a - b);
    let result = [];

    let left = 0;
    let right = sorted.length - 1;

    while (left <= right) {
        if (left === right) {
            result.push(sorted[left]);
        } else {
            result.push(sorted[left]);
            result.push(sorted[right]);
        }
        left++;
        right--;
    }
    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
console.log(solve([22, 9, 63, 3, 2, 19, 54, 11, 21, 18]));