function solve(carObj) {
    let { model, power, color, carriage, wheelsize } = carObj;
    let engine = {};

    if (power <= 90) {
        engine = { power: 90, volume: 1800 };
    } else if (power > 90 && power <= 120) {
        engine = { power: 120, volume: 2400 };
    } else if (power > 120 && power <= 200) {
        engine = { power: 200, volume: 3500 };
    }
    let type = carriage;
    carriage = { type, color };
    if (wheelsize % 2 === 0) {
        wheelsize--;
    }
    wheels = Array(4).fill(wheelsize);

    let result = { model, engine, carriage, wheels }

    return result;
}

console.log(solve({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}
));
console.log(solve({
    model: 'Opel Vectra',
    power: 110,
    color: 'grey',
    carriage: 'coupe',
    wheelsize: 17
}
));