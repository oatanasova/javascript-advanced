function solve(input){
    let townPopulation = {};

    for(let entry of input){
        let [town, population] = entry.split(' <-> ');
        population = Number(population);

        if(townPopulation.hasOwnProperty(town) == false){
            townPopulation[town] = 0;
        } 
        townPopulation[town] += population;

    }

    for(let town in townPopulation){
        console.log(`${town} : ${townPopulation[town]}`);
    }
    

}

solve(['Sofia <-> 1200000',
'Montana <-> 20000',
'New York <-> 10000000',
'Washington <-> 2345000',
'Las Vegas <-> 1000000']);
solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000']);
