function solve(matrix) {
    let main = 0;

    for (let row = 0; row < matrix.length; row++) {
        main += matrix[row][row];
    }

    let second = 0;

    for (let row = 0; row < matrix.length; row++) {
        let col = matrix.length - row - 1;
        second += matrix[row][col];
    }

    console.log(main, second);
}

solve([[20, 40],
[10, 60]]);
solve([[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]]);