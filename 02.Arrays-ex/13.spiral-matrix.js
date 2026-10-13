function solve(rows, cols) {
    let matrix = Array.from({ length: rows }, () => Array(cols));
    
    let top = 0;
    let bottom = rows - 1;
    let left = 0;
    let right = cols - 1;
    let num = 1;

    while (top <= bottom && left <= right) {

        // top row
        for (let col = left; col <= right; col++) {
            matrix[top][col] = num++;
        }
        top++;

        // right column
        for (let row = top; row <= bottom; row++) {
            matrix[row][right] = num++;
        }
        right--;

        // bottom row
        if (top <= bottom) {
            for (let col = right; col >= left; col--) {
                matrix[bottom][col] = num++;
            }
            bottom--;
        }

        // left column
        if (left <= right) {
            for (let row = bottom; row >= top; row--) {
                matrix[row][left] = num++;
            }
            left++;
        }
    }

    matrix.forEach(row => console.log(row.join(' ')));
}

solve(5, 5);
solve(3, 3);