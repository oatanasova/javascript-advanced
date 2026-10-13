function solve(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    let idx = 1;
    
    for (let el of arr) {
        console.log(`${idx}.${el}`);
        idx++;
    }

}

solve(["John", "Bob", "Christina", "Ema"]);
