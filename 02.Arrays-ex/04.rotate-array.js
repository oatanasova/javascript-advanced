function solve(arr, rotations){

    for (let i=1; i <= rotations; i++){
        let firstEl = arr.pop();

        arr.unshift(firstEl);
    }
    console.log(arr.join(' '));

}

solve(['1', '2', '3', '4'], 2);
solve(['Banana', 'Orange', 'Coconut', 'Apple'], 15);