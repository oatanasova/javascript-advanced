function solve(){
    let previous = 0;
    let current = 1;
    
    return function(){
        let result = current;
        current += previous;
        previous = result;

        return result;
    }
}

let fib = solve();
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());
console.log(fib());

let fib2 = solve();
console.log(fib2());
