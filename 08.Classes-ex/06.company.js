class Company {
    constructor() {
        this.departments = {};
    }

    addEmployee(name, salary, position, department) {
        if (name === '' || name === null || name === undefined ||
            salary === '' || salary === null || salary === undefined || salary < 0 ||
            position === '' || position === null || position === undefined ||
            department === '' || department === null || department === undefined) {
            throw new Error('Invalid input!');
        }

        if (!this.departments[department]) {
            this.departments[department] = [];
        }
        this.departments[department].push({ name, salary, position });
        return `New employee is hired. Name: ${name}. Position: ${position}`
    }

    bestDepartment() {
        let bestDept = '';
        let highestAvgSalary = 0;
        for (let [deptName, employee] of Object.entries(this.departments)) {
            let averageSalary = employee.reduce((acc, e) => acc + e.salary, 0) / employee.length;

            if (averageSalary > highestAvgSalary) {
                highestAvgSalary = averageSalary;
                bestDept = deptName;
            }
        }

        let sortedEmployyes = this.departments[bestDept].sort((a, b) => {
            return b.salary - a.salary || a.name.localeCompare(b.name);
        });

        let result = `Best Department is: ${bestDept}\n`;
        result += `Average salary: ${highestAvgSalary.toFixed(2)}\n`;
        // for() can be done with ...
        result += sortedEmployyes.map((e) => `${e.name} ${e.salary} ${e.position}`).join('\n');

        return result;
    }

}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
