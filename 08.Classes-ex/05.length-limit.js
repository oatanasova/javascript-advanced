class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    toString() {
        if (this.innerLength === 0) return '...';
        return this.innerString.length > this.innerLength
            ? `${this.innerString.slice(0, this.innerLength)}...`
            : this.innerString;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength = Math.max(0, this.innerLength - length);
    }

}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test
