class ShadyCarDealership {
    constructor(dealerName) {
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = 0;
    }

    addCar(model, year, mileage, price) {
        if (model === '' || year < 1950 || mileage < 0 || price < 0) {
            throw new Error("Invalid car!");
        }
        this.availableCars.push({ model, year, mileage, price });
        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredYear) {
        let soldPrice = 0;
        let foundCar = this.availableCars.find(car => car.model === model);

        if (!foundCar) {
            return `${model} was not found!`;
        } else {
            if (foundCar.year === desiredYear || foundCar.year > desiredYear) {
                soldPrice = foundCar.price;
            } else if (desiredYear - foundCar.year <= 5) {
                soldPrice = foundCar.price * 0.9;
            } else if (desiredYear - foundCar.year > 5) {
                soldPrice = foundCar.price * 0.8;
            }
        }

        let soldCar = {
            model: foundCar.model,
            year: foundCar.year,
            mileage: foundCar.mileage,
            soldPrice: soldPrice
        };

        this.soldCars.push(soldCar);
        let index = this.availableCars.indexOf(foundCar);
        this.availableCars.splice(index, 1);

        this.revenue += soldPrice;

        return `${soldCar.model} (${soldCar.year}) was sold for ${soldCar.soldPrice.toFixed(2)}$`;
    }

    prepareCarForSale(model) {
        let prepCar = this.availableCars.find(car => car.model === model);

        if (!prepCar) {
            return `${model} was not found for preparation!`;
        } else {
            prepCar.mileage = Math.floor(prepCar.mileage * 0.5);
            prepCar.price *= 1.3;
            return `${prepCar.model} (${prepCar.year}) is prepared for sale with ${prepCar.mileage} km. - ${prepCar.price.toFixed(2)}$`;
        }
    }

    salesJournal(criteria) {
        if (criteria !== 'year' && criteria !== 'model') {
            throw new Error('Invalid criteria!');
        }

        if (criteria === 'model') {
            this.soldCars.sort((a, b) => a.model.localeCompare(b.model));
        } else {
            this.soldCars.sort((a, b) => b.year - a.year);
        }


        let output = `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$\n`;
        output += `${this.soldCars.length} cars sold:\n`;
        // for() can be done with ...
        output += this.soldCars.map((e) => `${e.model} (${e.year}) / ${e.mileage} km. / ${e.soldPrice.toFixed(2)}$`).join('\n');

        return output;

        // let output = `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$\n`;
        // output += `${this.soldCars.length} cars sold:\n`;
        // // for() can be done with ...
        // output += this.soldCars.map((e) => `${e.model} (${e.year}) / ${e.mileage} km. / ${e.soldPrice.toFixed(2)}$`).join('\n');
    }

}

const dealership = new ShadyCarDealership('Shady Motors');
console.log(dealership.addCar('Honda CR-V', 2010, 120000, 15000));
console.log(dealership.addCar('VW Golf', 2011, 130000, 12000));
// console.log(dealership.addCar('BMW X3', 2005, 220000, 9000));
// console.log(dealership.addCar('Toyota Yaris', 2015, 80000, 18000));


console.log(dealership.prepareCarForSale('Honda CR-V'));
// console.log(dealership.prepareCarForSale('Honda Jazz'));


console.log(dealership.sellCar('Honda CR-V', 2012));
// console.log(dealership.sellCar('BMW X3', 2012));
// console.log(dealership.sellCar('Toyota Yaris', 2012));

console.log(dealership.salesJournal('model'));

//Testing All
// const ShadyCarDealership= result;
// let dealership = new ShadyCarDealership('Shady Motors');

// assert.equal(dealership.addCar('Honda CR-V', 2010, 120000, 15000)
// , "New car added: Honda CR-V (2010) / 120000 km. - 15000.00$");
// assert.equal(dealership.addCar('VW Golf', 2011, 130000, 12000)
// , "New car added: VW Golf (2011) / 130000 km. - 12000.00$");
// assert.equal(dealership.prepareCarForSale('Honda CR-V'), "Honda CR-V (2010) is prepared for sale with 60000 km. - 19500.00$");
// assert.equal(dealership.sellCar('Honda CR-V', 2012), "Honda CR-V (2010) was sold for 17550.00$");
// assert.equal(dealership.salesJournal('model'), "Shady Motors has a total income of 17550.00$\n1 cars sold:\nHonda CR-V (2010) / 60000 km. / 17550.00$");

