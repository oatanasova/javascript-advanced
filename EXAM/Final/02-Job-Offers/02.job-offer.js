class JobOffers {
    constructor(employer, position) {
        this.employer = employer;
        this.position = position;
        this.jobCandidates = [];
    }

    jobApplication(candidates) {
        candidates.forEach((element) => {
            let [name, education, yearsExperience] = element.split('-');
            yearsExperience = Number(yearsExperience);
            education = education.trim();
            let found = this.jobCandidates.find(e => e.name === name);
            if (found) {
                if (found.yearsExperience < yearsExperience) {
                    found.yearsExperience = yearsExperience;
                }
            } else {
                this.jobCandidates.push({ name, education, yearsExperience });
            }
        });
        let output = 'You successfully added candidates: '
        output += this.jobCandidates.map((e) => `${e.name}`).join(', ');

        return output + '.';
    }

    jobOffer(chosenPerson) {

        let [name, minimalExperience] = chosenPerson.split('-');
        minimalExperience = Number(minimalExperience);

        let found = this.jobCandidates.find(e => e.name === name);

        if (!found) {
            throw new Error(`${name} is not in the candidates list!`);
        }

        if (minimalExperience > found.yearsExperience) {
            throw new Error(`${name} does not have enough experience as ${this.position}, minimum requirement is ${minimalExperience} years.`);
        } else {
            found.yearsExperience = 'hired';
            return `Welcome aboard, our newest employee is ${name}.`;
        }
    }

    salaryBonus(name) {
        let found = this.jobCandidates.find(e => e.name === name);
        if (!found) {
            throw new Error(`${name} is not in the candidates list!`);
        }
        if (found.education === 'Bachelor') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $50,000 per year!`;
        } else if (found.education === 'Master') {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $60,000 per year!`;
        } else {
            return `${name} will sign a contract for ${this.employer}, as ${this.position} with a salary of $40,000 per year!`;
        }
    }

    candidatesDatabase() {
        if (this.jobCandidates.length === 0) {
            throw new Error("Candidate Database is empty!");
        } else {
            let output = "Candidates list:\n"
            this.jobCandidates.sort((a, b) => a.name.localeCompare(b.name));
            output += this.jobCandidates.map((e) => `${e.name}-${e.yearsExperience}`).join('\n')
            return output;
        }
    }
}


// Input 4
let Jobs = new JobOffers("Google", "Strategy Analyst");
console.log(Jobs.jobApplication(["John Doe-Bachelor-10", "Peter Parker-Master-5", "Jordan Cole-High School-5", "Daniel Jones- Bachelor-18"]));
console.log(Jobs.jobOffer("John Doe-8"));
console.log(Jobs.jobOffer("Peter Parker-4"));
console.log(Jobs.jobOffer("Jordan Cole-4"));
console.log(Jobs.salaryBonus("Jordan Cole"));
console.log(Jobs.salaryBonus("John Doe"));
console.log(Jobs.candidatesDatabase());

// Output 4
// You successfully added candidates: John Doe, Peter Parker, Jordan Cole, Daniel Jones.
// Welcome aboard, our newest employee is John Doe.
// Welcome aboard, our newest employee is Peter Parker.
// Welcome aboard, our newest employee is Jordan Cole.
// Jordan Cole will sign a contract for Google, as Strategy Analyst with a salary of $40,000 per year!
// John Doe will sign a contract for Google, as Strategy Analyst with a salary of $50,000 per year!
// Candidates list:
// Daniel Jones-18
// John Doe-hired
// Jordan Cole-hired
// Peter Parker-hired