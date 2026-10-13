function solve(name, population, treasury) {
    // let city = {
    //     name: name,
    //     population: population,
    //     treasury: treasury
    // };

    let city = {}

    city.name = name;
    city.population = population;
    city.treasury = treasury;

    return city;

}

{

    const city = solve('Tortuga', 7000, 15000);
    console.log(city);
}

{
    const city = solve('Santo Domingo', 12000, 23500);
    console.log(city);
}