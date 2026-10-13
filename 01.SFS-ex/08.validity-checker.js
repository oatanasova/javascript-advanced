function solve(x1, y1, x2, y2) {
    let distance1 = Math.sqrt((0 - x1) ** 2 + (0 - y1) ** 2);
    let distance2 = Math.sqrt((x2 - 0) ** 2 + (y2 - 0) ** 2);
    let distance3 = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    if (Number.isInteger(distance1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if (Number.isInteger(distance3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

// solve(3, 0, 0, 4);
solve(2, 1, 1, 1);