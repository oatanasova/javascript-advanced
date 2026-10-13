function solve(arr) {
    let result = [];

    for (let el of arr) {
        let [town, product, price] = el.split(' | ');
        price = Number(price);

        let exists = result.find(x => x.product === product);

        if (exists) {
            if (exists.price > price) {
                exists.town = town;
                exists.price = price;
            }
        } else {
            result.push({ town, product, price });
        }
    }


    for (let entry of result) {
        console.log(`${entry.product} -> ${entry.price} (${entry.town})`);
    }

}

solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10']);
