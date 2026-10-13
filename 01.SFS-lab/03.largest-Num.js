function solve(num1, num2, num3) {
    let largestNum = num1;
    if (num2 > largestNum) {

        largestNum = num2;

    }
    if (num3 > largestNum) {
        largestNum = num3;
    }

    console.log(`The largest number is ${largestNum}.`);
}

solve(5, -3, 16);
solve(-3, -5, -22.5);