function solve(arr) {
    let [rows, cols, x, y] = arr.map(Number);

    let matrix = [];

    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = Math.max(Math.abs(i - x),Math.abs(j - y)) + 1;
        }

    }


console.log(matrix.map((row) => row.join(' ')).join('\n'));
}

solve([4, 4, 0, 0]);
solve([5, 5, 2, 2]);
solve([3, 3, 2, 2]);