function cityTaxes(name, population, treasury) {
    let city = {};

    city.name = name;
    city.population = population;
    city.treasury = treasury;
    city.taxRate = 10;

    city.collectTaxes = function () {
        this.treasury += Math.floor(this.population * this.taxRate);
    };

    city.applyGrowth = function (percentage) {
        this.population += Math.floor(this.population * percentage / 100);
    }

    city.applyRecession = function (percentage) {
        this.treasury -= Math.ceil(this.treasury * percentage / 100);
    }

    return city;
}

// input
{
    const city = cityTaxes('Tortuga', 7000, 15000);
    console.log(city);
}
//test input
{
    const city = cityTaxes('Tortuga',  7000,  15000);
    city.collectTaxes();
    console.log(city.treasury);
    city.applyGrowth(5);
    console.log(city.population);
}
// {
//     const city = solve('Sofia', 2000000, 1000000);
//     console.log(city);
// }

