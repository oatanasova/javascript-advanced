function solve(arr){
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];

    let player = 'X';

    for (let move of arr) {
        let [row, col] = move.split(' ').map(Number);

        if (board[row][col] !== false) {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        board[row][col] = player;

        // Check rows
        let winner = board.some(row =>
            row[0] === player &&
            row[1] === player &&
            row[2] === player
        );

        // Check columns
        for (let col = 0; col < 3 && !winner; col++) {
            if (
                board[0][col] === player &&
                board[1][col] === player &&
                board[2][col] === player
            ) {
                winner = true;
            }
        }

        // Check diagonals
        if (!winner) {
            winner =
                (board[0][0] === player &&
                 board[1][1] === player &&
                 board[2][2] === player) ||
                (board[0][2] === player &&
                 board[1][1] === player &&
                 board[2][0] === player);
        }

        if (winner) {
            console.log(`Player ${player} wins!`);
            board.forEach(row => console.log(row.join('\t')));
            return;
        }

        // Check draw
        let full = board.every(row => row.every(cell => cell !== false));

        if (full) {
            console.log('The game ended! Nobody wins :(');
            board.forEach(row => console.log(row.join('\t')));
            return;
        }

        player = player === 'X' ? 'O' : 'X';
    }

}

// solve(  ["0 1",
//         "0 0",
//         "0 2", 
//         "2 0",
//         "1 0",
//         "1 1",
//         "1 2",
//         "2 2",
//         "2 1",
//         "0 0"]);
// solve(  ["0 0",
//         "0 0",
//         "1 1",
//         "0 1",
//         "1 2",
//         "0 2",
//         "2 2",
//         "1 2",
//         "2 2",
//         "2 1"]);
solve(  ["0 1",
        "0 0",
        "0 2",
        "2 0",
        "1 0",
        "1 2",
        "1 1",
        "2 1",
        "2 2",
        "0 0"]);