function solve(input) {

    class Car {
        constructor() {
            this.cars = {};
        }
        addCar(brand, model, quantity) {
            quantity = Number(quantity);
            if (!this.cars[brand]) {
                this.cars[brand] = {};
            }
            if (!this.cars[brand][model]) {
                this.cars[brand][model] = 0;
            }
            this.cars[brand][model] += quantity;
        }

        print() {
            for (let brand in this.cars) {
                let models = this.cars[brand];
                console.log(brand);
                for (const model in models) {
                    console.log(`###${model} -> ${models[model]}`);
                }
            }
        }
    }

    let carRegister = new Car();

    for (let el of input) {
        let [carBrand, carModel, producedCars] = el.split(' | ');

        carRegister.addCar(carBrand, carModel, producedCars);
    }

    carRegister.print();
}

console.log(solve([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']));