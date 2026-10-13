function solve(arr) {
    let result = [];

    let commandObject = {
        add: function (value) {
            result.push(value);
        },

        remove: function (value) {
            result = result.filter(item => item !== value);
        },

        print: function () {
            console.log(result.join(','));
        }
    };

    arr.forEach(element => {
        let [command, value] = element.split(' ');
        commandObject[command](value);
    });
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);