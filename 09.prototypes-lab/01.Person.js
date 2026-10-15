function createPerson(firstName, lastName) {

    let person = {
        firstName,
        lastName
    };

    Object.defineProperty(person, 'fullName', {
        configurable: true,
        enumerable: true,
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
            let names = value.split(' ');

            if (names.length === 2 && names[0] && names[1]) {
                this.firstName = names[0];
                this.lastName = names[1];
            }
        }
    });

    return person;
}

let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson

