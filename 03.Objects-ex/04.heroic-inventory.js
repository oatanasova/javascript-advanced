function solve(input) {
    let result = [];

    for(let entry of input){
        

        let [name, level, items] = entry.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];

        if(name && level && items){
            result.push({name, level, items});
        }
        
    }

    console.log(JSON.stringify(result));
}

solve(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara']);
solve(['Jake / 1000 / Gauss, HolidayGrenade']);