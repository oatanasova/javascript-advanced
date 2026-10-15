class HomeRenovation {
    constructor(budget) {
        this.budget = budget;
        this.tasks = [];
        this.completedTasks = [];
    }

    addTask(description, cost, priority) {
        if (cost > this.budget) {
            return `Not enough budget to add '${description}' task.`;
        } else {
            this.tasks.push({ description, cost, priority });
            this.budget -= cost;

            return `The task '${description}' has been successfully added to the renovation plan.`;
        }
    }

    markTaskAsCompleted(description) {
        let foundTask = this.tasks.find(name => name.description === description);

        if (!foundTask) {
            throw new Error(`Task '${description}' not found in the renovation plan.`);
        }

        let doneTask = {
            description: foundTask.description,
            cost: foundTask.cost,
            priority: foundTask.priority
        };

        this.completedTasks.push(doneTask);

        let index = this.tasks.indexOf(foundTask);
        this.tasks.splice(index, 1);

        return `The task '${description}' has been successfully completed.`;
    }

    getPriorityTasksCount(minimalPriority) {
        if (minimalPriority <= 0) {
            return "The priority cannot be zero or negative.";
        }

        let foundTask = this.tasks.filter(name => name.priority >= minimalPriority);

        if (foundTask.length !== 0) {
            return `You have ${foundTask.length} tasks to prioritize.`;
        } else {
            return `No tasks found with priority ${minimalPriority} or higher.`;
        }
    }

    renovationSummary() {
        if (this.completedTasks.length === 0) {
            throw new Error("No tasks have been completed yet!");
        } else {
            let output = `Budget left $${this.budget}.\n`
            output += `You have completed ${this.completedTasks.length} tasks.\n`
            output += `Pending tasks in the renovation plan:\n`
            output += this.tasks.map((e) => `${e.description} - Cost: ${e.cost}, Priority: ${e.priority}`).join('\n');

            return output;
        }
    }
}

const renovation = new HomeRenovation(10000);
console.log(renovation.addTask("Paint walls", 1500, 2)); 
console.log(renovation.addTask("Install new windows", 5000, 1)); 
console.log(renovation.markTaskAsCompleted("Paint walls")); 
console.log(renovation.renovationSummary());