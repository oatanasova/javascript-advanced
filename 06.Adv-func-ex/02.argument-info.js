function solve(...args) {
    let types = new Map();

    for (let arg of args) {
        let type = typeof arg;

        console.log(`${type}: ${arg}`);

        if (!types.has(type)) {
            types.set(type, 1);
        } else {
            types.set(type, types.get(type) + 1);
        }
    }

    let sorted = Object.entries(types).sort((a, b) => b[1] - a[1]);
    //new syntax to remmeber? 
    //let sorted = [...types.entries()]
    //     .sort((a, b) => b[1] - a[1]);

    for (let [type, count] of sorted) {
        console.log(`${type} = ${count}`);
    }
}

solve('cat', 42, function () { console.log('Hello world!'); });
solve({ name: 'bob'}, 3.333, 9.999);