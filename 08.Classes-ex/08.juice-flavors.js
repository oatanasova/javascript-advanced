function solve(input) {
    class Juice {
        constructor() {
            this.juice = {};
            this.bottles = new Map();
        }

        addJuice(flavor, qty) {
            qty = Number(qty);
            if (!this.juice[flavor]) {
                this.juice[flavor] = qty;
            } else {
                this.juice[flavor] += qty;
            }

            if (this.juice[flavor] >= 1000) {
                this.makeBottle(flavor);
            }
        }

        makeBottle(flavor) {
            let fullBottle = Math.floor(this.juice[flavor] / 1000);
            let leftover = this.juice[flavor] % 1000;
            this.juice[flavor] = leftover;
            if (this.bottles.has(flavor)) {
                let currBottles = this.bottles.get(flavor);
                currBottles += fullBottle;
                this.bottles.set(flavor, currBottles);
            } else {
                this.bottles.set(flavor, fullBottle);
            }
        }

        print() {
            for (let [bottle, qty] of this.bottles) {
                console.log(`${bottle} => ${qty}`);
            }
        }
    }

    let juiceStorage = new Juice();

    for (let el of input) {
        let [flavor, qty] = el.split(' => ');
        juiceStorage.addJuice(flavor, qty);
    }

    juiceStorage.print();
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);
solve(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789']);