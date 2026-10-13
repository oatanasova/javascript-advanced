function solve(arr) {
    let newArr = [];

    for (let el of arr) {
        if (el < 0) {
            newArr.unshift(el);
        } else {
            newArr.push(el);
        }
    }

    console.log(newArr.join('\n'));


}

solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);