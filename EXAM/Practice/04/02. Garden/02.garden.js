class Garden {
    constructor(spaceAvailable) {
        this.spaceAvailable = spaceAvailable;
        this.plants = [];
        this.storage = [];
    }

    addPlant(plantName, spaceRequired) {
        if (spaceRequired > this.spaceAvailable) {
            throw new Error("Not enough space in the garden.");
        } else {
            this.plants.push({ plantName, spaceRequired, ripe: false, quantity: 0 });
            this.spaceAvailable -= spaceRequired;
            return `The ${plantName} has been successfully planted in the garden.`
        }
    }

    ripenPlant(plantName, quantity) {
        let foundPlant = this.plants.find(name => name.plantName === plantName);

        if (!foundPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (foundPlant.ripe) {
            throw new Error(`The ${plantName} is already ripe.`);
        }
        if (quantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        foundPlant.ripe = true;
        foundPlant.quantity += quantity;

        if (quantity === 1) {
            return `${quantity} ${plantName} has successfully ripened.`
        } else {
            return `${quantity} ${plantName}s have successfully ripened.`
        }
    }

    harvestPlant(plantName) {
        let foundPlant = this.plants.find(name => name.plantName === plantName);

        if (!foundPlant) {
            throw new Error(`There is no ${plantName} in the garden.`);
        }
        if (!foundPlant.ripe) {
            throw new Error(`The ${plantName} cannot be harvested before it is ripe.`);
        }

        let harvested = {
            plantName: foundPlant.plantName,
            quantity: foundPlant.quantity
        };

        this.storage.push(harvested);

        let index = this.plants.indexOf(foundPlant);
        this.plants.splice(index, 1);
        this.spaceAvailable += foundPlant.spaceRequired;

        return `The ${plantName} has been successfully harvested.`
    }

    generateReport() {
        let output = `The garden has ${this.spaceAvailable} free space left.\n`
        this.plants.sort((a, b) => a.plantName.localeCompare(b.plantName));
        this.storage.sort((a, b) => a.plantName.localeCompare(b.plantName));
        output += "Plants in the garden: "
        output += this.plants.map((e) => `${e.plantName}`).join(', ');
        if (this.storage.length === 0) {
            output += "\nPlants in storage: The storage is empty.";
        } else {
            output += "\nPlants in storage: ";
            output += this.storage.map((e) => `${e.plantName} (${e.quantity})`).join(', ')
        }

        return output;
    }

}

const myGarden = new Garden(250)
console.log(myGarden.addPlant('apple', 20));
console.log(myGarden.addPlant('orange', 200));
console.log(myGarden.addPlant('raspberry', 10));
console.log(myGarden.ripenPlant('apple', 10));
console.log(myGarden.ripenPlant('orange', 1));
console.log(myGarden.harvestPlant('orange'));
console.log(myGarden.generateReport());
