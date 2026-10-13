function solve(arr) {

    let matrix = arr.map((row) => row.split(' ').map(Number));

    let leftDiag = 0;
    let rightDiag = 0;

    for (let i = 0; i < matrix.length; i++) {
        leftDiag += matrix[i][i];
        rightDiag += matrix[i][matrix.length - i - 1];
    }

    if (leftDiag !== rightDiag) {
        console.log(matrix.map((row) => row.join(' ')).join('\n'));
        return;
    }

    let diagSum = leftDiag;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            let isLeftDiag = row === col;
            let isRigthDiag = row + col === matrix.length - 1;

            if (!isLeftDiag && !isRigthDiag) {
                matrix[row][col] = diagSum;
            }
        }
    }
    console.log(matrix.map((row) => row.join(' ')).join('\n'));

}

solve(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']);

solve(['1 1 1',
    '1 1 1',
    '1 1 0']);