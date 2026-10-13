function solution() {
    let str = '';

    return {
        append,
        removeStart,
        removeEnd,
        print
    };

    function append(value) {
        str = str + value;
    }
    function removeStart(n) {
        str = str.slice(n);
    }
    function removeEnd(n) {
        str = str.slice(0, -n);
    }
    function print() {
        console.log(str);
    }
}


let firstZeroTest = solution();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
