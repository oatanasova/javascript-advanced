function solution() {
    class Employee {
        name;
        age;

        constructor(name, age) {
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        };

        work() {
            const task = this.tasks.shift();

            console.log(`${this.name} ${task}`);

            this.tasks.push(task);
        };

        getSalary(){
            return this.salary;
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`);
        };
    };

    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(`is working on a simple task.`);
        }
    };

    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(
                `is working on a complicated task.`,
                `is taking time off work.`,
                `is supervising junior workers.`);
        }
    };

    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(
                'scheduled a meeting.',
                'is preparing a quarterly report.');
        }

        getSalary(){
            return super.getSalary() + this.dividend;
        }

    };

    return { Employee, Junior, Senior, Manager };
}

const test = solution();
const junior = new test.Junior('Ivan', 25);

junior.work();
junior.work();

junior.salary = 5811;
junior.collectSalary();

const sinior = new test.Senior('Alex', 31);

sinior.work();
sinior.work();
sinior.work();
sinior.work();

sinior.salary = 12050;
sinior.collectSalary();

const manager = new test.Manager('Tom', 55);

manager.salary = 15000;
manager.collectSalary();
manager.dividend = 2500;
manager.collectSalary();