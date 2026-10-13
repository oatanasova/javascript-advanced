function solve(arr) {
    let cars = {};

    for (let command of arr) {
        let [action, ...props] = command.split(' ');
        // props = props.toString()
        if (action === "create") {
            if (props.includes('inherit')) {
                let name = props.shift();
                let parent = props.pop();
                inherit(name, parent);
            } else {
                let name = props.shift();
                create(name);
            }
        } else if (action === 'set') {
            let name = props.shift();
            let key = props.shift();
            let value = props.shift();

            setProp(name, key, value);

        } else {
            let name = props.shift();
            print(name)
        }
    }

    function create(name) {
        cars[name] = {};
    }

    function inherit(name, parent) {
        cars[name] = Object.create(cars[parent]);
    }

    function setProp(name, key, value) {
        cars[name][key] = value;
    }

    function print(name) {
        let result = [];

        for (let key of Object.keys(cars[name])) {
            result.push(`${key}:${cars[name][key]}`);
        }

        for (let key in cars[name]) {
            if (!cars[name].hasOwnProperty(key)) {
                result.push(`${key}:${cars[name][key]}`);
            }
        }

        console.log(result.join(','));
    }
}

solve([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);