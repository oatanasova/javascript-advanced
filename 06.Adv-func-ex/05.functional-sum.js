function add(num) {
    let sum = num;

    function result(value) {
        sum += value;
        return result;
    }

    result.toString = function () {
        return sum;
    };

    return result;
}

console.log(add(1).toString());
console.log(add(3)(4).toString());
console.log(add(1)(6)(-3).toString());
