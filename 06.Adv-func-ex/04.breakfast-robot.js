function solution() {
    let stock = {
        protein: 0, carbohydrate: 0, fat: 0, flavour: 0
    };

    let recipes = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }

    return function manager(command) {
        let [action, item, quantity] = command.split(' ');
        quantity = Number(quantity);

        if (action === 'restock') {
            stock[item] += Number(quantity);
            return 'Success'
        } else if (action === 'prepare') {
            let requiredIngredients = recipes[item];

            for (let ingr in requiredIngredients) {
                let requiredQuantity = requiredIngredients[ingr] * quantity;

                if (stock[ingr] < requiredQuantity) {
                    return `Error: not enough ${ingr} in stock`;
                }
            }

            for (let ingr in requiredIngredients) {
                stock[ingr] -= requiredIngredients[ingr] * quantity;
            }

            return 'Success'
        } else if (action === 'report') {
            return `protein=${stock.protein} carbohydrate=${stock.carbohydrate} fat=${stock.fat} flavour=${stock.flavour}`
        }
    };
}

let manager = solution();
console.log(manager("restock flavour 50"));
console.log(manager("prepare lemonade 4"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));