function solve(area, vol, jsonData){
    let data = JSON.parse(jsonData);
    let result = [];

    for(let entry of data){
        let obj = {
            area: area.call(entry),
            volume: vol.call(entry)
        };
        result.push(obj);
    }
    return result;
}

function area(){
    return Math.abs(this.x * this.y);
}

function vol(){
    return Math.abs(this.x * this.y * this.z);
}

{
    let data = `[
{"x":"1","y":"2","z":"10"},
{"x":"7","y":"7","z":"10"},
{"x":"5","y":"2","z":"10"}
]`;
console.log(solve(area, vol, data));
}

// function area() {
//     return Math.abs(this.x * this.y);
// };
// function vol() {
//     return Math.abs(this.x * this.y * this.z);
// };
// let actual = result(area, vol,'[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]');
// let expected = [
//   { area: 2, volume: 20 },
//   { area: 49, volume: 490 },
//   { area: 10, volume: 100 }
// ];
// assert.deepEqual(actual,expected,"The returned value is not correct")