function solve(...args) {
    let num = Number(args.shift());

    for (let command of args) {
        if (command === 'chop') {
            num /= 2;
        } else if (command === 'dice') {
            num = Math.sqrt(num)
        } else if (command === 'spice') {
            num++;
        } else if (command === 'bake') {
            num *= 3;
        } else if (command === 'fillet') {
            num *= 0.80;
        }
        console.log(num);
        
    }

}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');