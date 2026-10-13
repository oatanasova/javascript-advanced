function solve(arr){
    let result = [];

    for(let i = 1; i< arr.length; i++){
        let [, town, latitude, longitude] = arr[i].split('|');

        result.push({
            Town: town.trim(),
            Latitude: JSON.parse(Number(latitude).toFixed(2)),
            Longitude: JSON.parse(Number(longitude).toFixed(2)),
        })
    }

    console.log(JSON.stringify(result));
}

solve([
    '| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);
solve([
    '| Town | Latitude | Longitude |',
    '| Veliko Turnovo | 43.0757 | 25.6172 |',
    '| Monatevideo | 34.50 | 56.11 |']);