function solve() {
    let [quickCheckBtn, clearBtn] = Array.from(document.querySelectorAll('tfoot button'));
    let grid = Array.from(document.querySelectorAll('tbody input'));
    let table = document.querySelector('table');
    let message = document.querySelector('#check p');

    quickCheckBtn.addEventListener('click', () => {
        let valid = true;

        for (let row = 0; row < 3; row++) {
            let numbers = [];

            for (let col = 0; col < 3; col++) {
                numbers.push(Number(grid[row * 3 + col].value));
            }

            if (new Set(numbers).size !== 3 || numbers.some(num => num < 1 || num > 3)) {
                valid = false;
                break;
            }
        }

        if (valid) {
            for (let col = 0; col < 3; col++) {
                let numbers = [];

                for (let row = 0; row < 3; row++) {
                    numbers.push(Number(grid[row * 3 + col].value));
                }

                if (new Set(numbers).size !== 3) {
                    valid = false;
                    break;
                }
            }
        }

        if (valid) {
            table.style.border = '2px solid green';
            message.textContent = 'You solve it! Congratulations!';
            message.style.color = 'green';
        } else {
            table.style.border = '2px solid red';
            message.textContent = 'NOP! You are not done yet...';
            message.style.color = 'red';
        }

    });

    clearBtn.addEventListener('click', () => {
        for (let box of grid) {
            box.value = '';
        }

        table.style.border = '';
        message.textContent = '';
        message.style.color = '';
    });
}