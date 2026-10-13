function solve(input) {
    let stack = [];

    let operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
    };

    for (let el of input) {
        if (typeof el === 'number') {
            stack.push(el);
        } else {
            if (stack.length < 2) {
                console.log('Error: not enough operands!');
                return;
            }

            let b = stack.pop();
            let a = stack.pop();

            stack.push(operations[el](a, b));
        }
    }

    if (stack.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(stack[0]);
    }
}

solve([3, 4, '+']);
solve([5, 3, 4, '*', '-']);
solve([7, 33, 8, '-']);
solve([15, '/']);